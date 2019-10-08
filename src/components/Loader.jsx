import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VehicleCard from './VehicleCard';
import Error from './Error';

const Loader = ({ url }) => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setError('');
        setData(result);
      })
      .catch((err) => {
        setError(err.message);
        setData();
      });
  };

  useEffect(fetchData, [url]);

  const rData = (
    <VehicleCard
      body_type="SUV"
      transmission="Automatic"
      std_seating="5"
    />
  );
  const rNoData = null;

  const rError = <Error message={error} />;
  const rNoError = null;

  return (
    <div>
      {data ? rData : rNoData}
      {error ? rError : rNoError}
    </div>
  );
};

Loader.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Loader;
