import { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CounterPick from '../../components/Picker/CounterPick';
import RadioButton from '../../components/RadioButton/RadioButton';
import { useStore } from '../../store/useStore';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../types/IProduct';
import s from '../Store/Store.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Product(props: IProduct) {
  const addProduct = useStore((state) => state.addProduct);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    alert(t('message.AddProductToCart'));
    addProduct(
      props.title,
      props.body,
      props.price,
      props.weight,
      props.imageURL,
      props.imageALT,
    );
    navigate(t('url.store'));
  };
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
            <img
              className="w-full h-80 object-cover"
              src={location.state.imageURL}
              alt={location.state.imageALT}
            />
            <h4 className="text-md text-blue-400 uppercase py-4">
              {location.state.tag}
            </h4>
            <h2 className="text-4xl capitalize">{location.state.title}</h2>
            <div className="w-full h-1 bg-gray-200 my-8" />
            <p>{location.state.body}</p>
            <div>
              <form onSubmit={handleSubmit} className={s.product__form}>
                <div className={s.product__container}>
                  <div>
                    <label className={s.product__label}>
                      {t('modal.weightToChoose')}
                    </label>
                    <RadioButton
                      checked={true}
                      label={location.state.weight}
                      name="radio"
                    />
                  </div>
                  <div>
                    <label className={s.modal__label}>{t('modal.price')}</label>
                    <p className={s.product__price}>{location.state.price}zł</p>
                  </div>
                  <div>
                    <label className={s.product__label}>
                      {t('modal.amount')}
                    </label>
                    <CounterPick />
                  </div>
                </div>
                <div>
                  <button className={s.product__btn} type="submit">
                    {t('modal.buyNow')}
                  </button>
                  <button className={s.product__btn} type="submit">
                    {t('modal.addToCart')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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

export default Product;
