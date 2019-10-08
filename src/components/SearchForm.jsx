import React, { useState } from 'react';
import Button from '../components/Button';
import Error from '../components/Error';

const SearchForm = ({ vin, handleSearchAction }) => {
  const [input, setInput] = useState(vin || '');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(input.match('/[^a-zA-Z0-9]/') && input.length === 17) {
      setError('');
      handleSearchAction(input);
    } else {
      setError('Invalid input! Enter 17 character alphanumeric [A-Z, 0-9] VIN');
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full p-3 rounded border-2 border-gray-300 focus:border-gray-400"
        placeholder="Enter VIN"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      { error
        ? <Error message={error} />
        : null
      }

      <div className="mt-2 flex justify-center">
        <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800">
          View Code
        </Button>

        <Button className="bg-blue-600 hover:bg-blue-700 text-blue-100">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
