import { useTranslation } from 'react-i18next';
import s from './Error.module.scss';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function Error() {
  const { t } = useTranslation();
  useDocumentTitle(`${t('navigation.header.error').toUpperCase()}`);
  return (
    <div className={s.error}>
      <h1 className={s.error__header}>{t('error.header')}</h1>
      <p className={s.error__description}>{t('error.message')}</p>
      <div className={s.error__list}>
        <a className={s.error__list_btn} href={t('url.homepage')}>
          {t('backToHomepage')}
        </a>
        <a className={s.error__list_btn} href={t('url.store')}>
          {t('navigation.header.store')}
        </a>
        <a className={s.error__list_btn} href={t('url.contact')}>
          {t('navigation.header.contact')}
        </a>
      </div>
    </div>
  );
}

export default Error;
