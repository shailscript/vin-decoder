import React from 'react';

const Button = ({ children, className }) => (
  <button className={`m-2 px-4 py-2 rounded uppercase tracking-wider ${className}`}>
    {children}
  </button>
);

export default Button;
