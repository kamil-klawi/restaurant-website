import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useStore } from '../../store/useStore';
import Product from '../../components/Product/Product';

function Cart() {
  const cartItems = useStore((state) => state.cartItems);
  const removeAllProducts = useStore((state) => state.removeAllProducts);
  const { t } = useTranslation();

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
              href="/store"
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
            />
          ))}
        {cartItems.length > 0 && (
          <button
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            className="bg-red-500 py-3 px-6 capitalize text-white font-bold rounded lg:py-2 lg:px-4"
            onClick={removeAllProducts}
          >
            usuń
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
