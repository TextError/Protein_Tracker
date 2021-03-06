import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { calc, clearTargetErrors } from '../../../../redux/actions/target';
import { createStructuredSelector } from 'reselect';
import { state_calc_isLoading } from '../../../../redux/selectors/target';

import CustomButton from '../../../common/button/Custom_Button';
import Input from '../../../common/form/input/Input';
import Select from '../../../common/form/select/Select';
import validateCalc from './validation/validate_calc';
import doTheCalc from './DoTheCalc';

const Calc = ({ show, setShow, calc, isLoading, clearTargetErrors }) => {
  const [state, setState] = useState({ age: '', gender: '', activity: '', height: '', weight: '' });
  const [error, setError] = useState({ age: '', gender: '', activity: '', height: '', weight: '' });
  const { age, height, weight } = state;

  // Clear Errors CDUM
  useEffect(() => {
    const clear = () => clearTargetErrors();
    return clear;
    // eslint-disable-next-line
  },[]);

  const onClick = () => setShow({ ...show, btn: true, calc: false });
  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });
  const onFocus = e => {
    const { age, gender, activity, height, weight } = error;
    if(!( age || gender || activity || height || weight )) return null;
    const field = Object.keys(error).filter(i => i === e.target.name )[0];
    setError({ ...error, [field]: '' });
  }

  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateCalc({ ...state });
    if(!isValid) return setError({ ...error, ...errors });
    const { cal, prot, fat, carb } = doTheCalc(state);
    calc({ cal, prot, fat, carb });
    setShow({ ...show, btn: true, calc: false });
  }

  return (
    <form className='mt-3 mb-3' noValidate onSubmit={onSubmit}>
      <div className='row no-gutters'>
        <div className='col-8 col-sm-6 col-md-5 col-lg-4 m-auto'>
          <Input
            name='age'
            value={age}
            label='Age'
            error={error.age}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='col-8 col-sm-6 col-md-5 col-lg-4 m-auto'>
          <Select
            name='gender'
            value={[
              { key: 'Man', value: 'Man' },
              { key: 'Women', value: 'Women' }
            ]}
            label='Gender'
            error={error.gender}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='col-8 col-sm-6 col-md-5 col-lg-4 m-auto'>
          <Select
            name='activity'
            value={[
              { key: '1.2', value: 'Little to no exercise' },
              { key: '1.375', value: '1–3 days per week' },
              { key: '1.55', value: '3–5 days per week' },
              { key: '1.725', value: '6–7 days per week' },
              { key: '1.9', value: 'Twice per day' }
            ]}
            label='Activity'
            error={error.activity}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='col-8 col-sm-6 col-md-5 col-lg-4 offset-lg-3 m-auto'>
          <Input
            name='height'
            value={height}
            label='Height (cm)'
            error={error.height}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <div className='col-8 col-sm-6 col-md-5 col-lg-4 offset-lg-3 m-auto'>
          <Input
            name='weight'
            value={weight}
            label='Weight (kg)'
            error={error.weight}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
      </div>
      <div className='d-flex justify-content-around m-auto'>
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
};

Calc.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired,
  calc: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  clearTargetErrors: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isLoading: state_calc_isLoading
});

export default connect(mapStateToProps, { calc, clearTargetErrors })(Calc);