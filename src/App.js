import React from 'react';
import{ Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import MainPage from './pages/MainPage';

// appname = blogrx

const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route
          exact path="/register"
          component={Register}
        />
        <Route
          path="/"
          component={MainPage}
        />
      </Switch>
    </div>
  );
};

export default App;
