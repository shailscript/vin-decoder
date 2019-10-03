/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Property from './Property';

const VehicleCard = ({
  body_type,
  transmission,
  std_seating,
}) => (
  <div className="mt-12">
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl text-center text-gray-800">2018 Audi Q7</h2>

      <div className="flex mt-4">
        <div className="w-1/3 text-center">
          <Property
            icon="fas fa-car-alt"
            label="Body Type"
            value={body_type}
          />
        </div>

        <div className="w-1/3 text-center">
          <Property
            icon="fas fa-cogs"
            label="Transmission"
            value={transmission}
          />
        </div>

        <div className="w-1/3 text-center">
          <Property
            icon="fas fa-user"
            label="Seats"
            value={std_seating}
          />
        </div>
      </div>
    </div>
  </div>
);

VehicleCard.propTypes = {
  body_type: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  std_seating: PropTypes.string.isRequired,
};

export default VehicleCard;
