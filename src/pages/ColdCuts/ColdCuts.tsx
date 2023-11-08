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

// hooks
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

// styles
import s from '../Store/Store.module.scss';
import { IProduct } from '../../types/IProduct';

function ColdCuts() {
  const coldCuts = useStore((state) => state.coldCuts);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>(
    coldCuts[0],
  );

  const handleClick = (id: number) => {
    setSelectedProduct(coldCuts[id]);
  };

  // translation
  const { t } = useTranslation();

  // set document title
  useDocumentTitle(`${t('navigation.header.storeColdCuts').toUpperCase()}`);
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
            <h2 className={s.list__header}>{t('store.coldCuts')}</h2>
            <div className={s.list__breakline} />
            <p className={s.list__description}>
              {t('store.coldCutsDescription')}
            </p>
          </div>
          <div className="flex flex-wrap">
            {coldCuts &&
              coldCuts.map((product, index) => (
                <StoreCard
                  key={index}
                  title={product.title}
                  price={product.price}
                  imageURL={product.imageURL}
                  imageALT={product.imageALT}
                  setProduct={() => handleClick(index)}
                  openModal={setOpenModal}
                />
              ))}
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          title={selectedProduct?.title}
          body={selectedProduct?.body}
          weight={selectedProduct?.weight}
          price={selectedProduct?.price}
          imageURL={selectedProduct?.imageURL}
          imageALT={selectedProduct?.imageALT}
          closeModal={setOpenModal}
        />
      )}
      <Footer />
    </div>
  );
}

function MenuList() {
  const { t } = useTranslation();
  const path = window.location.pathname.replace('/', '');
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

export default ColdCuts;
