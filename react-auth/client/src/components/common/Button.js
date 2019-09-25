import React from 'react';
import s from './Button.module.css';

const Button = ({ text='', onClick = () => null, type = 'button' }) => (
  <button className={s.button} type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;

