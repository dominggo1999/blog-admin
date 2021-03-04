import React from 'react';
import{ Route, Switch } from 'react-router-dom';
import Register from './pages/Register';

// appname = blogrx

const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route
          exact path="/"
          component={Register}
        />

      </Switch>
    </div>
  );
};

export default App;
