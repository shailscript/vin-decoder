/* eslint-disable camelcase */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Intro from './components/Intro';
import Button from './components/Button';
import VehicleCard from './components/VehicleCard';

const SearchForm = () => (
  <form>
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
);

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div className="w-full max-w-lg py-24">
        <Intro />

        <div className="mt-12">
          <SearchForm />
        </div>

        <VehicleCard
          body_type="SUV"
          transmission="Automatic"
          std_seating="5"
        />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
