import React from 'react';

const Label = ({ text = '', children }) => (
  <label className={classes.label}>
    <span className={classes.text}>{text}</span>
    {children}
  </label>
);

export default Label;
