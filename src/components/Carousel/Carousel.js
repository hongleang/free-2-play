// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/core";

import "./Carousel.scss";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

const Carousel = (props) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      slidesPerView={2}
      spaceBetween={100}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      centeredSlides={true}
      autoplay={{
        delay: 10500,
      }}
      navigation={true}
      className="mySwiper"
    >
      {props.games &&
        props.games.map((game) => {
          return (
            <SwiperSlide key={game.id}>
              <a href={game.freetogame_profile_url} target="_blank" rel='noreferrer'>
                <img src={game.thumbnail} alt="" />
              </a>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Carousel;
