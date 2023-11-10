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
import MenuList from '../../components/MenuList/MenuList';

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

export default Product;
