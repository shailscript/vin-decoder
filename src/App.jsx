/* eslint-disable camelcase */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchPage from './pages/Search';

const App = () => (
  <div className="min-h-screen bg-gray-200 flex justify-center">
    <BrowserRouter>
      <Route
        path="/search"
        component={SearchPage}
      />
    </BrowserRouter>
  </div>
);

export default App;
