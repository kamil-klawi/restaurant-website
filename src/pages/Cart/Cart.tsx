import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// store
import { useStore } from '../../store/useStore';

// components
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import Input from '../../components/Input/Input';

// styles
import s from './Cart.module.scss';
import RadioButton from '../../components/RadioButton/RadioButton';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function Cart() {
  const cartItems = useStore((state) => state.cartItems);
  const removeAllProducts = useStore((state) => state.removeAllProducts);
  const { t } = useTranslation();

  useDocumentTitle(`${t('navigation.header.cart').toUpperCase()}`);

  const handleClick = () => {
    if (confirm(t('message.CleanTheCart'))) {
    } else {
      return;
    }
    removeAllProducts();
  };

  return (
    <>
      <Header />
      <div className="mx-64 my-24 lg:mx-4 lg:my-8">
        {cartItems.length == 0 && (
          <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <h2 className="text-4xl tracking-wide font-light text-black opacity-75 lg:text-2xl">
              {t('cart.header')}
            </h2>
            <div className="my-8 w-16 h-1 bg-blue-400" />
            <p className="my-16 text-md font-light text-black opacity-75">
              {t('cart.description')}
            </p>
            <a
              className="relative uppercase px-12 py-4 bg-blue-400 text-white tracking-wide"
              href={t('url.store')}
            >
              {t('cart.btn')}
            </a>
          </div>
        )}
        {cartItems.length > 0 && (
          <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <h2 className="text-4xl tracking-wide font-light text-black opacity-75 lg:text-2xl">
              {t('cart.header')}
            </h2>
            <div className="my-8 w-16 h-1 bg-blue-400" />
          </div>
        )}
        {cartItems.length > 0 &&
          cartItems.map((item, index) => (
            <Product
              key={index}
              weight={item.weight}
              title={item.title}
              price={item.price}
              imageURL={item.imageURL}
              imageALT={item.imageALT}
            />
          ))}
        {cartItems.length > 0 && (
          <button
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            className="bg-red-500 py-3 px-6 capitalize text-white font-bold rounded lg:py-2 lg:px-4"
            onClick={handleClick}
          >
            {t('cart.delete')}
          </button>
        )}
        {cartItems.length > 0 && (
          <div
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            className="my-6"
          >
            <div className="flex">
              <p className="text-blue-400">*&nbsp;</p>
              <p className="text-sm">{t('cart.descAlcoOrder')}</p>
            </div>
            <div className="flex w-3/4">
              <p className="text-blue-400">**&nbsp;</p>
              <p className="text-sm">{t('cart.descAlcoForm')}</p>
            </div>
            <div className="mt-24">
              <h2 className="text-4xl tracking-wide font-light text-black opacity-75 lg:text-2xl">
                {t('cart.secondHeader')}
              </h2>
              <div className="my-8 w-16 h-1 bg-blue-400" />
              <DeliveryForm />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

function DeliveryForm() {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      postcode: '',
      locality: '',
      phone: '',
      email: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, t('invalid.min3Characters'))
        .required(t('invalid.required')),
      address: Yup.string().required(t('invalid.required')),
      postcode: Yup.string()
        .matches(/^\d{2}-\d{3}$/, t('invalid.postcode'))
        .required(t('invalid.required')),
      locality: Yup.string().required(t('invalid.required')),
      phone: Yup.string()
        .matches(/^((\+[4]{1}[8]{1})([0-9]{9}))$/, t('invalid.phoneNumber'))
        .required(t('invalid.required')),
      email: Yup.string()
        .email(t('invalid.email'))
        .required(t('invalid.required')),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="font-bold uppercase text-lg mb-8">
        {t('cart.customer')}:
      </h2>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
        <div>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            label={t('cart.fullName')}
            placeholder={t('cart.fullNamePlaceholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className={`${s.form__input} ${
              formik.touched.fullName && formik.errors.fullName
                ? 'border-red-500'
                : ''
            }`}
            required={true}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="mb-4 text-sm font-bold text-red-500">
              {formik.errors.fullName}
            </div>
          ) : null}
        </div>
        <div>
          <Input
            id="address"
            name="address"
            type="text"
            label={t('cart.address')}
            placeholder={t('cart.addressPlaceholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className={`${s.form__input} ${
              formik.touched.address && formik.errors.address
                ? 'border-red-500'
                : ''
            }`}
            required={true}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="mb-4 text-sm font-bold text-red-500">
              {formik.errors.address}
            </div>
          ) : null}
        </div>
        <div>
          <Input
            id="postcode"
            name="postcode"
            type="text"
            label={t('cart.postcode')}
            placeholder={t('cart.postcodePlaceholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postcode}
            className={`${s.form__input} ${
              formik.touched.postcode && formik.errors.postcode
                ? 'border-red-500'
                : ''
            }`}
            required={true}
          />
          {formik.touched.postcode && formik.errors.postcode ? (
            <div className="mb-4 text-sm font-bold text-red-500">
              {formik.errors.postcode}
            </div>
          ) : null}
        </div>
        <div>
          <Input
            id="locality"
            name="locality"
            type="text"
            label={t('cart.locality')}
            placeholder={t('cart.localityPlaceholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.locality}
            className={`${s.form__input} ${
              formik.touched.locality && formik.errors.locality
                ? 'border-red-500'
                : ''
            }`}
            required={true}
          />
          {formik.touched.locality && formik.errors.locality ? (
            <div className="mb-4 text-sm font-bold text-red-500">
              {formik.errors.locality}
            </div>
          ) : null}
        </div>
        <div>
          <Input
            id="phone"
            name="phone"
            type="text"
            label={t('cart.phone')}
            placeholder={t('cart.phonePlaceholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className={`${s.form__input} ${
              formik.touched.phone && formik.errors.phone
                ? 'border-red-500'
                : ''
            }`}
            required={true}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="mb-4 text-sm font-bold text-red-500">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            label={t('cart.email')}
            placeholder={t('cart.emailPlaceholder')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`${s.form__input} ${
              formik.touched.email && formik.errors.email
                ? 'border-red-500'
                : ''
            }`}
            required={true}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="mb-4 text-sm font-bold text-red-500">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between mt-8 lg:flex-col">
        <h2 className="font-bold uppercase text-lg lg:mb-8">
          {t('cart.deliveryWay')}:<span className="text-blue-400">*</span>
        </h2>
        <div className="lg:mb-8">
          <RadioButton label={t('cart.own')} name="radio" />
        </div>
        <div className="lg:mb-8">
          <RadioButton label={t('cart.ownDelivery')} name="radio" />
        </div>
        <div className="lg:mb-8">
          <RadioButton label={t('cart.courier')} name="radio" />
        </div>
        <button className={s.form__delivery} type="submit">
          {t('cart.confirmOrder')}
        </button>
      </div>
    </form>
  );
}

export default Cart;
