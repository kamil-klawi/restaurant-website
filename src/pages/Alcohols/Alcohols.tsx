import { useTranslation } from 'react-i18next';
import { ChangeEvent, useState } from 'react';
import { useStore } from '../../store/useStore';

// components
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import StoreCard from '../../components/StoreCard/StoreCard';
import Modal from '../../components/Modal/Modal';

// utils
import { Pathname } from '../../utils/Pathname';

// hooks
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

// styles
import s from '../Store/Store.module.scss';

function Alcohols() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showAlcohols, setShowAlcohols] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();

  const alcohols = useStore((state) => state.alcohols);
  const { t } = useTranslation();
  useDocumentTitle(`${t('navigation.header.store').toUpperCase()}`);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(Number(e.target.value.split('-')[0]));
    setMonth(Number(e.target.value.split('-')[1]));
    setDay(Number(e.target.value.split('-')[2]));
  };

  const handleClick = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    const age = currentYear - Number(year);
    if (
      age < 18 ||
      (age == 18 && Number(month) > currentMonth) ||
      (age == 18 && Number(month) == currentMonth && Number(day) > currentDay)
    ) {
      setErrorMessage(t('store.tooYoung'));
      setShowAlcohols(false);
    } else {
      setErrorMessage('');
      setShowAlcohols(true);
    }
  };

  return (
    <>
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
            <h2 className={s.list__header}>{t('store.alcohols')}</h2>
            <div className={s.list__breakline} />
            <p className={s.list__description}>
              {t('store.alcoholsDescription')}
            </p>
          </div>
          <div className="w-full h-1 bg-gray-200 mb-8" />
          {!showAlcohols && (
            <h4 className="text-md font-bold text-red-400 mb-6">
              {t('store.info')}
            </h4>
          )}
          <div className="flex flex-wrap">
            {!showAlcohols && (
              <div>
                <div>
                  <Input
                    type="date"
                    placeholder="mm/dd/yyyy"
                    id="age"
                    name="age"
                    label={t('store.ageValidation')}
                    className={s.data__input}
                    onChange={handleChange}
                    required={false}
                    onBlur={() => ''}
                  />
                  <div className="text-red-400 font-bold text-sm first-letter:uppercase mb-4">
                    {errorMessage}
                  </div>
                </div>
                <button className={s.data__btn} onClick={handleClick}>
                  {t('store.accept')}
                </button>
              </div>
            )}
            {showAlcohols &&
              alcohols.map((product, index) => (
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
        alcohols.map((product, index) => (
          <Modal
            key={index}
            title={product.title}
            body={product.body}
            weight={product.volume}
            price={product.price}
            closeModal={setOpenModal}
          />
        ))}
      <Footer />
    </>
  );
}

function MenuList() {
  const { t } = useTranslation();
  const path = window.location.pathname.replace('/', '');
  return (
    <ul className={s.category__list}>
      <li className={s.category__item}>
        <a
          href="/store/cheeses"
          className={`${s.category__link} ${
            path == 'store/cheeses' || path == 'store'
              ? s.category__link_active
              : ''
          }`}
        >
          {t('navigation.store.cheeses')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href="/store/cold_cuts"
          className={`${s.category__link} ${
            path == 'store/cold_cuts' ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.cold_cuts')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href="/store/deli"
          className={`${s.category__link} ${
            path == 'store/deli' ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.deli')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href="/store/alcohols"
          className={`${s.category__link} ${
            path == 'store/alcohols' ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.alcohols')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href="/store/catering"
          className={`${s.category__link} ${
            path == 'store/catering' ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.catering')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href="/store/new"
          className={`${s.category__link} ${
            path == 'store/new' ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.new')}
        </a>
      </li>
      <li className={s.category__item}>
        <a
          href="/store/sales"
          className={`${s.category__link} ${
            path == 'store/sales' ? s.category__link_active : ''
          }`}
        >
          {t('navigation.store.sales')}
        </a>
      </li>
    </ul>
  );
}

export default Alcohols;
