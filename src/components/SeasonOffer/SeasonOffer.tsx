import { useTranslation } from 'react-i18next';
import s from './SeasonOffer.module.scss';

function SeasonOffer() {
  const { t } = useTranslation();
  return (
    <div className={s.seasonOffer}>
      <div className={`${s.seasonOffer__image} ${s.image__a}`} />
      <div className={s.seasonOffer__content}>
        <h2 className={s.seasonOffer__header}>
          {t('homepage.seasonOffer.header')}
        </h2>
        <div className={s.seasonOffer__breakLine} />
        <p className={`${s.seasonOffer__text} ${s.seasonOffer__text_black}`}>
          {t('homepage.seasonOffer.subText')}
        </p>
        <p className={s.seasonOffer__text}>{t('homepage.seasonOffer.text')}</p>
        <a className={s.seasonOffer__btn} href="/menu">
          {t('homepage.seasonOffer.btn')}
        </a>
      </div>
      <div className={`${s.seasonOffer__image} ${s.image__b}`} />
      <div className={`${s.seasonOffer__image} ${s.image__c}`} />
    </div>
  );
}

export default SeasonOffer;
