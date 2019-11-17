import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../../../common/button/Custom_Button';
import Input from '../../../common/form/input/Input';
import Select from '../../../common/form/select/Select';
import validateCalc from './validation/validate_calc';

const Calc = ({ show, setShow }) => {
  const [state, setState] = useState({ age: '', gender: '', activity: '', height: '', weight: '' });
  const [error, setError] = useState({ age: '', gender: '', activity: '', height: '', weight: '' });
  const { age, height, weight } = state;

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

  }

  return (
    <form className='mt-3 mb-3' noValidate onSubmit={onSubmit}>
      <div className='d-flex justify-content-between'>
        <Input
          name='age'
          value={age}
          label='Age'
          error={error.age}
          onChange={onChange}
          onFocus={onFocus}
        />
        <Select
          name='gender'
          value={[
            { key: 'Man', value: 'man' },
            { key: 'Women', value: 'women' }
          ]}
          label='Gender'
          error={error.gender}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
      <div className='d-flex justify-content-center'>
        <Select
          name='activity'
          value={[
            { key: 'Little to no exercise', value: '1.2' },
            { key: '1–3 days per week', value: '1.375' },
            { key: '3–5 days per week', value: '1.55' },
            { key: '6–7 days per week', value: '1.725' },
            { key: 'Twice per day', value: '1.9' }
          ]}
          label='Activity'
          error={error.activity}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
      <div className='d-flex justify-content-between'>
        <Input
          name='height'
          value={height}
          label='Height (cm)'
          error={error.height}
          onChange={onChange}
          onFocus={onFocus}
        />
        <Input
          name='weight'
          value={weight}
          label='Weight (kg)'
          error={error.weight}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
      <div className='d-flex justify-content-around m-auto'>
        <CustomButton text='Cancel' onClick={onClick} isClass='btn-danger text-uppercase font-weight-bold' />
        <CustomButton text='Save' isClass='btn-success text-uppercase font-weight-bold' type='submit' />
      </div>
    </form>
  )
}

Calc.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired
}

export default Calc;