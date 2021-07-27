import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Hompage'

const App = () => {

  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Homepage></Homepage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
