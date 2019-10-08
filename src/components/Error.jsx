import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <div className="w-full my-2 p-3 rounded bg-red-100 border-l-4 border-red-600">
    <div className="text-md text-red-900">
      <i className="pr-3 fas fa-exclamation-circle opacity-75" />
      {message}
    </div>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
