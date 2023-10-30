import { useTranslation } from 'react-i18next';
import NewsletterImage from '../../assets/images/nalesnik.jpg';
import s from './Newsletter.module.scss';

function Newsletter() {
  const { t } = useTranslation();
  return (
    <div className={s.newsletter}>
      <div className={s.newsletter__image}>
        <img src={NewsletterImage} alt="nalesnik" />
      </div>
      <div className={s.newsletter__content}>
        <h3 className={s.newsletter__header}>{t('newsletter.header')}</h3>
        <div className={s.newsletter__breakLine} />
        <p className={s.newsletter__text}>{t('newsletter.text')}</p>
        <div className={s.newsletter__form}>
          <input
            className={s.newsletter__input}
            type="email"
            name="email"
            placeholder={t('newsletter.placeholder')}
          />
          <button className={s.newsletter__btn} type="button">
            {t('newsletter.btn')}
          </button>
          <div className={s.newsletter__accept}>
            <input
              className={s.newsletter__checkbox}
              type="checkbox"
              name="privacy_police"
            />
            <p>
              {t('newsletter.description')}&nbsp;
              <a className={s.newsletter__link} href="/privacy_police">
                {t('policy')}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
