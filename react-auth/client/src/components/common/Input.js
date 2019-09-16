import React from 'react';
import s from './Input.module.css';

const Input = ({ value = '', onChange = () => null, placeholder = '', name = '', type = 'text' }) => (
  <input className={s.input} type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} />
);

export default Input;
