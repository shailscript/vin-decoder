import React from 'react';

const Button = ({ children, className, ...rest }) => (
  <button
    className={`m-2 px-4 py-2 rounded uppercase tracking-wider ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
