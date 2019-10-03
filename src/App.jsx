import React from 'react';
import Intro from './components/Intro';
import Button from './components/Button';


const App = () => (
  <div className="min-h-screen bg-gray-200 flex justify-center">
    <div className="w-full max-w-lg py-24">
      <Intro />

      <form className="mt-12">
        <input
          className="w-full p-3 rounded border-2 border-gray-300 focus:border-gray-400"
          placeholder="Enter VIN"
        />

        <div className="mt-2 flex justify-center">
          <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800">
            View Code
          </Button>

          <Button className="bg-blue-600 hover:bg-blue-700 text-blue-100">
            Submit
          </Button>
        </div>
      </form>
    </div>
  </div>
);

export default App;
