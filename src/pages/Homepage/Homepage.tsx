import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Newsletter from '../../components/Newsletter/Newsletter';
import PopularDishes from '../../components/PopularDishes/PopularDishes';
import SeasonOffer from '../../components/SeasonOffer/SeasonOffer';

import s from './Homepage.module.scss';

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <div className={s.homepage__image}>
        <h3 className={s.homepage__header}>Czego u nas skosztujesz?</h3>
      </div>
      <PopularDishes />
      <div className={s.homepage__image}>
        <h3 className={s.homepage__header}>Oferta specjalna</h3>
      </div>
      <SeasonOffer />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Homepage;
