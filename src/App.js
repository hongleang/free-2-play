import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
// import TopGameList from './pages/TopGameList/TopGameList';

const App = () => {
  const APIKey = "a60e9faf7fmshc23154d0472737cp1baaf5jsna13ea55c29e8";

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </Router>
  );
};

export default App;
