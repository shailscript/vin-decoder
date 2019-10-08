import React from 'react';
import PropTypes from 'prop-types';

const ButtonLike = ({ children, className, ...rest }) => (
  <span
    className={`m-2 px-4 py-2 rounded uppercase tracking-wider ${className}`}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </span>
);

ButtonLike.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonLike;
