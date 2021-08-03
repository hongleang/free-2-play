import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Hompage'
import Topgames from './pages/TopGames/TopGames'

const App = () => {

  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route exact path="/topgames">
            <Topgames></Topgames>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
