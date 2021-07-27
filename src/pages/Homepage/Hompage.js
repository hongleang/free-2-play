import { useState, useEffect } from "react";

import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__container container">
        <h5 className="hompage__header">
          <i class="fab fa-hotjar"></i> HOT GAMES
        </h5>
        <hr />
      </div>
      <div className="container-fluid">
        <div id="carousel" className="homepage__slider carousel slide" data-interval="false">
          <div class="homepage__slider__wrapper carousel-inner">
             <div class="homepage__slider__item carousel-item active">
              <img src="https://source.unsplash.com/random" class="" alt="..."></img>
            </div>
            <div class="homepage__slider__item carousel-item">
              <img src="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png" class="" alt="..."></img>
            </div>
            <div class="homepage__slider__item carousel-item">
              <img src="https://source.unsplash.com/random" class="" alt="..."></img>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
