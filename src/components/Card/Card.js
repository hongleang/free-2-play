import React from 'react';
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card__grid shadow-lg">
      <div className="card__item">
        <img src="https://source.unsplash.com/random" alt="" className="card__item__img" />
        <div className="card__item__content">
          <div className="card__item__content__left">
            <small>Available on </small>
            <h6>Game Title</h6>
          </div>
          <div className="card__item__content__right">
            <div className="badge badge--purple">
              Genre
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
