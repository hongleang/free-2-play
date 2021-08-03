import React from "react";

import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Hompage'
import Topgames from './pages/TopGames/TopGames'

const App = () => {

  return (
    <div>
      <Navbar></Navbar>
      {/*<Homepage></Homepage>*/}
      <Topgames></Topgames>
    </div>
  );
};

export default App;
