import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../store/useStore';

// components
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import StoreCard from '../../components/StoreCard/StoreCard';

// utils
import { Pathname } from '../../utils/Pathname';

// styles
import s from './Store.module.scss';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function Store() {
  const store = useStore((state) => state.store);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { t } = useTranslation();
  useDocumentTitle(`${t('navigation.header.store').toUpperCase()}`);
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
            <h2 className={s.list__header}>{t('store.cheeses')}</h2>
            <div className={s.list__breakline} />
            <p className={s.list__description}>{t('store.description')}</p>
          </div>
          <div className="flex flex-wrap">
            {store &&
              store.map((product, index) => (
                <StoreCard
                  key={index}
                  title={product.title}
                  price={product.price}
                  openModal={setOpenModal}
                />
              ))}
          </div>
        </div>
      </div>
      {openModal &&
        store.map((product, index) => (
          <Modal
            key={index}
            title={product.title}
            body={product.body}
            weight={product.weight}
            price={product.price}
            closeModal={setOpenModal}
          />
        ))}
      <Footer />
    </div>
  );
}

function MenuList() {
  const { t } = useTranslation();
  return (
    <ul className={s.category__list}>
      <li className={s.category__item}>
        <a
          href="/store/cheeses"
          className={`${s.category__link} ${s.category__link_active}`}
        >
          {t('navigation.store.cheeses')}
        </a>
      </li>
      <li className={s.category__item}>
        <a href="/store/cold_cuts" className={s.category__link}>
          {t('navigation.store.cold_cuts')}
        </a>
      </li>
      <li className={s.category__item}>
        <a href="/store/deli" className={s.category__link}>
          {t('navigation.store.deli')}
        </a>
      </li>
      <li className={s.category__item}>
        <a href="/store/alcohols" className={s.category__link}>
          {t('navigation.store.alcohols')}
        </a>
      </li>
      <li className={s.category__item}>
        <a href="/store/catering" className={s.category__link}>
          {t('navigation.store.catering')}
        </a>
      </li>
      <li className={s.category__item}>
        <a href="/store/new" className={s.category__link}>
          {t('navigation.store.new')}
        </a>
      </li>
      <li className={s.category__item}>
        <a href="/store/sales" className={s.category__link}>
          {t('navigation.store.sales')}
        </a>
      </li>
    </ul>
  );
}

export default Store;
