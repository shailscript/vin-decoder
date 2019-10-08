import React from 'react';

const Error = ({ message }) => (
  <div className="w-full my-2 p-3 rounded bg-red-300">
    <p className="text-md text-red-900">
      <i class="px-4 fas fa-exclamation-circle"></i>
      {message}
    </p>
  </div>
);

export default Error;