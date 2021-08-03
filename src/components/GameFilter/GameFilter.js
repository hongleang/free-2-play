import React from 'react';

const GameFilter = (props) => {
  const genreSelection = ["MMO", "MMORPG", "Shooter", "Strategy"];
  const platformSelection = ["PC", "Browser"];
  
  return(
    <div className="gamefilter-wrapper">
      <div className="platform-filter">
        <p>See more top ten games in:</p>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           {
            genreSelection.map((selection, selectionIndex) => {
              return (
                <li key={selectionIndex} className="dropdown-item"><input class="dropdown-item" onClick={selection.toLowerCase()} type="button"></input></li>
              )
             })
           }
            
          </ul>
        </div>
      </div>
      <div className="genre-filter">
      <p>See more top ten games in:</p>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="dropdown-item"></li>
        </ul>
      </div>
    </div>
    </div>
  )
}


export default GameFilter;