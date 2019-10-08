import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Loader = ({ url, onSuccess, onError }) => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const handleSuccess = (result) => {
    setError('');
    setData(result);
  };

  const handleFailure = ({ message }) => {
    setError(message);
    setData();
  };

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then(handleSuccess)
      .catch(handleFailure);
  };

  useEffect(fetchData, [url]);

  return (
    <div>
      {data ? onSuccess(data) : null}
      {error ? onError(error) : null}
    </div>
  );
};

Loader.propTypes = {
  url: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default Loader;
