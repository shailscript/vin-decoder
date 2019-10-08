import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import ButtonLike from './ButtonLike';

const SearchForm = ({ vin, onSubmit }) => {
  const [input, setInput] = useState(vin);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.length === 17 && !input.match(/[^A-Z0-9]/)) {
      setError('');
      onSubmit(input);
    } else {
      setError('Enter 17 character alphanumeric [A-Z, 0-9] VIN.');
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const rError = <Error message={error} />;
  const rNoError = null;

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full p-3 rounded border-2 border-gray-300 focus:border-gray-400"
        placeholder="Enter VIN"
        value={input}
        onChange={handleChange}
      />

      {error ? rError : rNoError}

      <div className="mt-4 flex justify-center">
        <a
          href="https://github.com/shailscript/vin-decoder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonLike className="bg-gray-300 hover:bg-gray-400 text-gray-800">
            View Code
          </ButtonLike>
        </a>

        <button type="submit">
          <ButtonLike className="bg-blue-600 hover:bg-blue-700 text-blue-100">
            Submit
          </ButtonLike>
        </button>
      </div>
    </form>
  );
};

SearchForm.defaultProps = {
  vin: '',
};

SearchForm.propTypes = {
  vin: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
