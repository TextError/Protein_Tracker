import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set, clearTargetErrors } from '../../../../redux/actions/target';
import { createStructuredSelector } from 'reselect';
import { state_set_isLoading, state_errors } from '../../../../redux/selectors/target';
import Input from '../../../common/form/input/Input';
import CustomButton from '../../../common/button/Custom_Button';
import validateSet from './validation/validate_set';

const Set = ({ show, setShow, set, isLoading, errors, clearTargetErrors }) => {
  const [state, setState] = useState({ cal: '', prot: '', fat: '', carb: '' });
  const [error, setError] = useState({ cal: '', prot: '', fat: '', carb: '' });
  const { cal, prot, fat, carb } = state;

  // Update error CDU
  useEffect(() => {
    setError({...error, ...errors});
    // eslint-disable-next-line
  },[errors]);

  // Clear Errors CDUM
  useEffect(() => {
    const clear = () => clearTargetErrors();
    return clear;
    // eslint-disable-next-line
  },[]);

  const onClick = () => {
    // Clear state
    setState({ cal: '', prot: '', fat: '', carb: '' });
    setShow({ ...show, btn: true, set: false });
  };
  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });
  const onFocus = e => {
    const { cal, prot, fat, carb } = error;
    if(!( cal || prot || fat || carb )) return null;
    const field = Object.keys(error).filter(i => i === e.target.name )[0];
    setError({ ...error, [field]: '' });
  }

  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateSet({ ...state });
    if(!isValid) return setError({ ...error, ...errors });
    set(state);
    setShow({ ...show, btn: true, set: false });
  }

  return (
    <form className='mt-3 mb-3' noValidate onSubmit={onSubmit}>
      <div className='row no-gutters'>
        <div className='col-7 col-sm-5 col-md-3 m-auto'>
          <Input
            name='cal'
            value={cal}
            label='Calories'
            error={error.cal}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='col-7 col-sm-5 col-md-3 m-auto'>
          <Input
            name='prot'
            value={prot}
            label='Protein'
            error={error.prot}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='col-7 col-sm-5 col-md-3 m-auto'>
          <Input
            name='fat'
            value={fat}
            label='Fat'
            error={error.fat}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='col-7 col-sm-5 col-md-3 m-auto'>
          <Input
            name='carb'
            value={carb}
            label='Carbohydrates'
            error={error.carb}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
      </div>
      <div className='d-flex justify-content-around'>
        <CustomButton text='Cancel' onClick={onClick} isClass='btn-danger text-uppercase font-weight-bold' />
        <CustomButton 
          text='Save' 
          isClass='btn-success text-uppercase font-weight-bold' 
          type='submit' 
          isLoading={isLoading}
        />
      </div>
    </form>
  )
}

Set.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired,
  set: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  clearTargetErrors: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isLoading: state_set_isLoading,
  errors: state_errors
});

export default connect(mapStateToProps, { set, clearTargetErrors })(Set);