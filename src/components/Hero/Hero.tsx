import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import s from './Hero.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

function Hero() {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className={s.hero__slider}
    >
      <SwiperSlide className={s.hero__slide}>
        <SwipSlide />
      </SwiperSlide>
      <SwiperSlide className={s.hero__slide}>
        <SwipSlide />
      </SwiperSlide>
      <SwiperSlide className={s.hero__slide}>
        <SwipSlide />
      </SwiperSlide>
    </Swiper>
  );
}

function SwipSlide() {
  const { t } = useTranslation();
  return (
    <>
      <div className={s.slide__content}>
        <h3
          className={`${s.slide__subheader} text-md font-bold text-white uppercase sm:text-sm`}
        >
          {t('homepage.hero.subTitle')}
        </h3>
        <h2 className={`${s.slide__header} text-white`}>
          {t('homepage.hero.title')}
        </h2>
        <p className={`${s.slide__text} text-md text-white`}>
          {t('homepage.hero.text')}
        </p>
        <a href="/store" className={s.slide__btn}>
          {t('homepage.hero.btn')}
        </a>
      </div>
      <div className={s.slide__media}>
        <a
          className={s.media__link}
          href="https://www.facebook.com/po.francusku/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
          </svg>
        </a>
        <a
          className={s.media__link}
          href="https://www.instagram.com/alafrancaisegdansk/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
          </svg>
        </a>
        <a
          className={s.media__link}
          href="https://www.tripadvisor.com/Restaurant_Review-g274725-d4607592-Reviews-A_la_francaise_Bistro_Cafe_Delikatesy-Gdansk_Pomerania_Province_Northern_Poland.html"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z"></path>
          </svg>
        </a>
      </div>
    </>
  );
}

export default Hero;
