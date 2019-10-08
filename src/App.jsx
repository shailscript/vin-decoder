import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';

const App = () => (
  <div className="min-h-screen bg-gray-200 flex justify-center">
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />

        <Route
          path="/search"
          component={SearchPage}
        />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
