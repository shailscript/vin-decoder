import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, ...rest }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={`m-2 px-4 py-2 rounded uppercase tracking-wider ${className}`}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
