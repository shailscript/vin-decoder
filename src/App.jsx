import React from 'react';
import Intro from './components/Intro';

const App = () => (
  <div className="min-h-screen bg-gray-200 flex justify-center">
    <div className="w-full max-w-lg py-24">
      <Intro />

      <form
        className="mt-12"
      >
        <input
          className="w-full p-3 rounded border-2 border-gray-300 focus:border-gray-400"
          placeholder="Enter VIN"
        />

        <div className="mt-2 flex justify-center">
          <button className="m-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded uppercase tracking-wider">
            View Code
          </button>

          <button className="m-2 bg-blue-600 hover:bg-blue-700 text-blue-100 px-4 py-2 rounded uppercase tracking-wider">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default App;
