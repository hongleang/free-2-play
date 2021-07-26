import React from 'react';
import { useEffect } from 'react';
import styles from './Homepage.module.scss';

import Navbar from '../../components/Navbar/Navbar';
import Features from '../../components/Features/Features';

// useEffect () {
//   fetch("https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": "a60e9faf7fmshc23154d0472737cp1baaf5jsna13ea55c29e8",
//       "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
//     }
//   })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.error(err);
//   });
// };

const Homepage = (props) => {
  return ( 
    <div className={styles.homepage}>
      <Navbar></Navbar>
      <Features></Features>
    </div> 
    );
}
 
export default Homepage;