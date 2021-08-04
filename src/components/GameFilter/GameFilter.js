import React from 'react';

import './GameFilter.scss';

const GameFilter = (props) => {
  const { onChangePlatform , onChangeGenre } = props;
  
  const genreSelection = ["MMO", "MMORPG", "Shooter", "Strategy"];
  const platformSelection = ["PC", "Browser"];
  
  
  return(
    <div className="gamefilter-wrapper">
      <div className="platform-filter">
        <p>See more top ten games in:</p>
        <div className="dropdown">
          <select
           name="menu" id="selection" 
           className="btn btn-secondary dropdown-toggle"
           onChange={event => onChangeGenre(event)}
           >
            {
            genreSelection.map((selection, selectionIndex) => {
              return (
                <option key={selectionIndex}>{selection}</option>
              )
              })
            }
          </select>          
        </div>
      </div>
      <div className="genre-filter">
        <p>See more top ten games in:</p>
        <div className="dropdown">
          <select
          name="menu" id="selection" 
          className="btn btn-secondary dropdown-toggle"
          onChange={event => onChangePlatform(event)}
          >
            {
            platformSelection.map((selection, selectionIndex) => {
              return (
                <option key={selectionIndex}>{selection}</option>
              )
              })
            }
          </select>          
        </div>
      </div>
    </div>
  )
}


export default GameFilter;