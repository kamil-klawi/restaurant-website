import s from '../../pages/Store/Store.module.scss';
import { useTranslation } from 'react-i18next';

function MenuList() {
  const { t } = useTranslation();
  const path = window.location.pathname;
  return (
    <ul className={s.category__list}>
      <li className={s.category__item}>
        <a
          href={t('url.storeCheeses')}
          className={`${s.category__link} ${
            path == t('url.storeCheeses') || path == t('url.store')
              ? s.category__link_active
              : ''
          }`}
        >
          {t('navigation.store.cheeses')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href={t('url.storeColdCuts')}
          className={`${s.category__link} ${
            path == t('url.storeColdCuts') ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.cold_cuts')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href={t('url.storeDeli')}
          className={`${s.category__link} ${
            path == t('url.storeDeli') ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.deli')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href={t('url.storeAlcohols')}
          className={`${s.category__link} ${
            path == t('url.storeAlcohols') ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.alcohols')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href={t('url.storeCatering')}
          className={`${s.category__link} ${
            path == t('url.storeCatering') ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.catering')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href={t('url.storeNews')}
          className={`${s.category__link} ${
            path == t('url.storeNews') ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.new')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href={t('url.storeSales')}
          className={`${s.category__link} ${
            path == t('url.storeSales') ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.sales')}
        </a>
      </li>
    </ul>
  );
}

export default MenuList;
