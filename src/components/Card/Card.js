import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card__grid">
      {props.games && props.games.map((game) => {
        return (
          <div className="card__item shadow-lg" key={game.id}>
            <img
              src={game.thumbnail}
              alt=""
              className="card__item__img"
            />
            <div className="card__item__content">
              <div className="card__item__content__left">
                <small>Available on {game.platform}</small>
                <h6>{game.title}</h6>
              </div>
              <div className="card__item__content__right">
                <div className="badge badge--purple">{game.genre}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
