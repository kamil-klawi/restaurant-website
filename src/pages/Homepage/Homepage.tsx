import { useTranslation } from 'react-i18next';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Newsletter from '../../components/Newsletter/Newsletter';
import PopularDishes from '../../components/PopularDishes/PopularDishes';
import SeasonOffer from '../../components/SeasonOffer/SeasonOffer';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

import s from './Homepage.module.scss';

function Homepage() {
  const { t } = useTranslation();
  useDocumentTitle(`${t('homeURL').toUpperCase()}`);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <div className={s.homepage__image}>
        <h3 className={s.homepage__header}>{t('homepage.firstSlogan')}</h3>
      </div>
      <PopularDishes />
      <div className={`${s.homepage__image} ${s.homepage__image_second}`}>
        <h3 className={s.homepage__header}>{t('homepage.secondSlogan')}</h3>
      </div>
      <SeasonOffer />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Homepage;
