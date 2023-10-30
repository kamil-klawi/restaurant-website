import { useTranslation } from 'react-i18next';
import AboutImage01 from '../../assets/images/21-gryczany-nalesnik01.jpg';
import AboutImage02 from '../../assets/images/20-cebulowa-zupa09.jpg';
import s from './About.module.scss';

function About() {
  const { t } = useTranslation();
  return (
    <div className={s.card}>
      <div className={s.card__content}>
        <h2 className={s.card__header}>{t('homepage.about.firstHeader')}</h2>
        <div className={s.card__breakLine} />
        <p className={s.card__text}>{t('homepage.about.firstText')}</p>
        <a className={s.card__btn} href="/menu">
          {t('homepage.about.btn')}
        </a>
      </div>
      <div className={s.card__image}>
        <img src={AboutImage01} alt="gryczany nalesnik" />
      </div>
      <div className={s.card__image}>
        <img src={AboutImage02} alt="cebulowa zupa" />
      </div>
      <div className={s.card__content}>
        <div className={s.card__title}>
          <h2 className={s.card__header}>{t('homepage.about.secondHeader')}</h2>
          <div className={s.card__breakLine} />
        </div>
        <p className={s.card__text}>{t('homepage.about.secondText')}</p>
        <p className={s.card__text}>{t('homepage.about.thirdText')}</p>
      </div>
    </div>
  );
}

export default About;
