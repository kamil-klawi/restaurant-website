import NewsletterImage from '../../assets/images/nalesnik.jpg';
import s from './Newsletter.module.scss';

function Newsletter() {
  return (
    <div className={s.newsletter}>
      <div className={s.newsletter__image}>
        <img src={NewsletterImage} alt="nalesnik" />
      </div>
      <div className={s.newsletter__content}>
        <h3 className={s.newsletter__header}>Newsletter</h3>
        <div className={s.newsletter__breakLine} />
        <p className={s.newsletter__text}>
          Zapisz się i bądź na bieżąco z naszą ofertą oraz promocjami!
        </p>
        <div className={s.newsletter__form}>
          <input
            className={s.newsletter__input}
            type="email"
            name="email"
            placeholder="WPISZ ADRES E-MAIL"
          />
          <button className={s.newsletter__btn} type="button">
            ZAPISZ SIĘ
          </button>
          <div className={s.newsletter__accept}>
            <input
              className={s.newsletter__checkbox}
              type="checkbox"
              name="privacy_police"
            />
            <p>
              Zapisując się do newslettera zgadzasz się na przetwarzanie Twoich
              danych osobowych przez firmę A la française i akceptujesz&nbsp;
              <a className={s.newsletter__link} href="/privacy_police">
                politykę prywatności
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
