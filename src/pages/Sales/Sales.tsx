import { useTranslation } from 'react-i18next';

// components
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MenuList from '../../components/MenuList/MenuList';

// utils
import { Pathname } from '../../utils/Pathname';

// hooks
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

// styles
import s from '../Store/Store.module.scss';

function Store() {
  // translation
  const { t } = useTranslation();

  // set document title
  useDocumentTitle(`${t('navigation.header.storeSales').toUpperCase()}`);
  return (
    <div>
      <Header />
      <div className={s.store__wrapper}>
        <div className={s.store__category}>
          <h2 className={s.category__header}>{t('store.category')}</h2>
          <div className={s.category__breakline} />
          <MenuList />
        </div>
        <div className={s.store__list}>
          <div className={s.store__content}>
            <div className={`${s.store__pathname} my-8`}>
              {t('homeURL')} /&nbsp;
              <span className="capitalize">{Pathname()}</span>
            </div>
            <h2 className={s.list__header}>{t('store.sales')}</h2>
            <div className={s.list__breakline} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Store;
