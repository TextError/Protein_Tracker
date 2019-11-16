import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, clearUserErrors } from '../../redux/actions/user';
import { createStructuredSelector } from 'reselect';
import { state_isLoading, state_errors } from '../../redux/selectors/user';
import validateSignIn from './validation/validation';

import Input from '../common/form/input/Input';
import CustomButton from '../common/button/Custom_Button';

const Form = ({ signIn, isLoading, errors, clearUserErrors }) => {
  const [state, setState] = useState({ email: 'Jdoe@test.com', password: '123456'});
  const [error, setError] = useState({ email: '', password: '' });
  const { email, password } = state;
  const isAuth = false;

  // Update error CDU
  useEffect(() => {
    setError({...error, ...errors});
    // eslint-disable-next-line
  },[errors]);

  // Clear Errors CDUM
  useEffect(() => {
    const clear = () => clearUserErrors();
    return clear;
    // eslint-disable-next-line
  },[]);
  
  const onChange = e => setState({...state, [e.target.name]: e.target.value });
  
  const onFocus = e => {
    const { email, password } = error;
    if(!( email || password )) return null;
    const field = Object.keys(error).filter(i => i === e.target.name )[0];
    setError({ ...error, [field]: '' });
  }

  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateSignIn(state);
    if(!isValid) return setError({ ...error, ...errors });
    signIn({ ...state });
  }

  // Redirect on Dashboard
  if(isAuth) return <Redirect to='/dashboard' />;

  return (
    <form noValidate onSubmit={onSubmit}>
      <Input
        name='email'
        value={email}
        label='Email'
        type='email'
        icon='fas fa-envelope'
        error={error.email}
        onChange={onChange}
        onFocus={onFocus}
      />
      <Input
        name='password'
        value={password}
        label='Password'
        type='password'
        icon='fas fa-lock'
        error={error.password}
        onChange={onChange}
        onFocus={onFocus}
      />
      <CustomButton 
        text='Submit' 
        isClass='btn-outline-primary w-100 text-uppercase font-weight-bold' 
        isLoading={isLoading} 
        type='submit' 
      />
    </form>
  )
};

Form.propTypes = {
  signIn: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  clearUserErrors: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isLoading: state_isLoading,
  errors: state_errors
});

export default connect(mapStateToProps, { signIn, clearUserErrors })(Form);