import React from 'react'

import './TopGameCard.scss';

const TopGameCard = (props) => {
  return (
    <div className="topgamesCardWrapper">
    {
      // Map top 10 results
      props.gamesData && props.gamesData.slice(0,10).map((data, index) => {
        return (
          <a className="topgamesCard shadow-lg" key = {index} href={data.game_url}>
            <div className="topgamesCard__img">
              <h2 className="ranking">{index + 1}.</h2>
              <img src={data.thumbnail} alt="game-thumbnail" />
            </div>
            <div className="topgamesCard__content">
              <h5 className="title">{data.title}</h5>
              <p className="description">{data.short_description}</p>
              <p className="release-date">{data.release_date}</p>
            </div>
          </a>
        )
      })
    }
      
    </div>
  )
}

export default TopGameCard
