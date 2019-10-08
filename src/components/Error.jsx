import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <div className="w-full my-2 p-3 rounded bg-red-300">
    <p className="text-md text-red-900">
      <i className="px-4 fas fa-exclamation-circle" />
      {message}
    </p>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
