import React from 'react';
import PropTypes from 'prop-types';

const Property = ({ icon, label, value }) => (
  <div className="text-center">
    <i className={`text-sm text-gray-500 ${icon}`} />
    <p className="text-xs uppercase font-medium tracking-wide text-gray-600 mt-1">
      {label}
    </p>

    <p className="text-lg mt-2">
      {value}
    </p>
  </div>
);

Property.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Property;
