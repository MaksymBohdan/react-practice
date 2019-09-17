import React from 'react';
import s from './Label.module.css'

const Label = ({ text = '', children }) => (
  <label className={s.label}>
    <span className={s.text}>{text}</span>
    {children}
  </label>
);

export default Label;
