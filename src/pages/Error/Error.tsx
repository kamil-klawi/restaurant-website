import { useTranslation } from 'react-i18next';
import s from './Error.module.scss';

function Error() {
  const { t } = useTranslation();
  return (
    <div className={s.error}>
      <h1 className={s.error__header}>Błąd 404! Nie znaleziono strony</h1>
      <p className={s.error__description}>
        Niestety strony, której szukasz nie istnieje lub została usunięta.
      </p>
      <div className={s.error__list}>
        <a className={s.error__list_btn} href="/">
          {t('backToHomepage')}
        </a>
        <a className={s.error__list_btn} href="/store">
          {t('navigation.header.store')}
        </a>
        <a className={s.error__list_btn} href="/contact">
          {t('navigation.header.contact')}
        </a>
      </div>
    </div>
  );
}

export default Error;
