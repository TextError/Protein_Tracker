import React from 'react';
import spinner from '../../../assets/spinner/spinner.gif';

export default ({ isClass }) => {
  return (
    <img src={spinner} className={isClass} alt='Loading...'/>
  );
};