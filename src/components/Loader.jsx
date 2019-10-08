import React, { useState, useEffect } from 'react';
import VehicleCard from './VehicleCard';

const Loader = ({ requestParams: { url, params } }) => {
  const [data, setData] = useState('');

  const fetchData = () => {
    fetch(url, params).then( (response) => response.json()).then(setData);
  }

  useEffect(fetchData, [url]);

  return (
    <div>
      {data
      ? <VehicleCard
          body_type="SUV"
          transmission="Automatic"
          std_seating="5"
        />
      : null
      }
    </div>
  );
}

export default Loader;
