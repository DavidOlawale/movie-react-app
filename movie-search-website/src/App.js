// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>
    </Router>
  );
}

export default App;
