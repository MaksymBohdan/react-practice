import React from 'react';
import s from './Form.module.css';

const Form = ({ onSubmit = () => null, children }) => (
  <form onSubmit={onSubmit} className={s.form}>
    {children}
  </form>
);

export default Form;
