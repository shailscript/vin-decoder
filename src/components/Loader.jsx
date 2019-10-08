/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VehicleCard from './VehicleCard';
import Error from './Error';

const Loader = ({ requestParams: { url, params } }) => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const fetchData = () => {
    fetch(url, params)
      .then((response) => response.json())
      .then(setData)
      .catch((err) => setError(err.message));
  };

  useEffect(fetchData, [url]);

  return (
    <div>
      {data
        ? <VehicleCard body_type="SUV" transmission="Automatic" std_seating="5" />
        : error
          ? <Error message={error} />
          : null}

    </div>
  );
};

Loader.propTypes = {
  requestParams: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.object,
  }).isRequired,
};

export default Loader;
