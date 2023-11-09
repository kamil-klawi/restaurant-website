import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../store/useStore';

// components
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import StoreCard from '../../components/StoreCard/StoreCard';
import MenuList from '../../components/MenuList/MenuList';

// utils
import { Pathname } from '../../utils/Pathname';

// hooks
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

// styles
import s from '../Store/Store.module.scss';
import { IProduct } from '../../types/IProduct';

function Deli() {
  const deli = useStore((state) => state.deli);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>(
    deli[0],
  );

  const handleClick = (id: number) => {
    setSelectedProduct(deli[id]);
  };

  // translation
  const { t } = useTranslation();

  // set document title
  useDocumentTitle(`${t('navigation.header.storeCatering').toUpperCase()}`);
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
            <h2 className={s.list__header}>{t('store.deli')}</h2>
            <div className={s.list__breakline} />
            <p className={s.list__description}>{t('store.deliDescription')}</p>
          </div>
          <div className="flex flex-wrap">
            {deli &&
              deli.map((product, index) => (
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

export default Deli;
