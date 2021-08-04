import React from 'react';
import { useState, useEffect } from 'react';

import TopGameCard from '../../components/TopGameCard/TopGameCard';
import GameFilter from '../../components/GameFilter/GameFilter';

import './TopGames.scss';

const TopGames = (props) => {

  const [ genre, setGenre ] = useState('Shooter');
  const [platform, setPlatform] = useState('PC');
  const [data, setData] = useState(null);
  const date = new Date();
  const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const fullDate = `${monthsName[date.getMonth()]}, ${date.getFullYear()}`;

  useEffect(() => {
    const fetchingGames = () => {
      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform.toLowerCase()}&category=${genre.toLowerCase()}&sort-by=popularity`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "a60e9faf7fmshc23154d0472737cp1baaf5jsna13ea55c29e8",
              "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
            }
          }      
      )
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
    }
    fetchingGames();
  },[platform, genre]);

  const onChangePlatformHandler = (event) => {
    event.preventDefault();
    const platforms = event.target.value.toLowerCase();
    setPlatform(platforms);
  };

  const onChangeGenreHandler = (event) => {
    event.preventDefault();
    const genres = event.target.value.toLowerCase();
    setGenre(genres);
  };


  return (
    <div className="topgames">
      <div className="topgames__container container">
        <h2 className="topgames__header fw-bold">
          <i className="fab fa-hotjar text-danger"></i> Popular free games title
        </h2>
        <hr />
        <h3 className="display-1">Top 10 {genre} for {platform} in {fullDate}</h3>
        <p>Below, you can find our ongoing Top 10 Free {genre} Games in August 2021. Credited: https://www.freetogame.com/</p>
        <GameFilter onChangePlatform={onChangePlatformHandler} onChangeGenre={onChangeGenreHandler}></GameFilter>
      </div>
      <div className="container">
        { data && <TopGameCard gamesData={data.slice(0,10)}></TopGameCard> }
      </div>
    </div>
  );
};


export default TopGames;