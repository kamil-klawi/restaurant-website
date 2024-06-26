import { createBrowserRouter } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Homepage from './pages/Homepage/Homepage';
import Menu from './pages/Menu/Menu';
import SpecialOffers from './pages/SpecialOffers/SpecialOffers';
import Store from './pages/Store/Store';
import Error from './pages/Error/Error';
import Alcohols from './pages/Alcohols/Alcohols';
import ColdCuts from './pages/ColdCuts/ColdCuts';
import Catering from './pages/Catering/Catering';
import Deli from './pages/Deli/Deli';
import News from './pages/News/News';
import Sales from './pages/Sales/Sales';
import { t } from 'i18next';
import Product from './pages/Product/Product';
import { RouteToProduct } from './components/Modal/Modal';

export const router = createBrowserRouter([
  {
    path: t('url.homepage'),
    element: <Homepage />,
  },
  {
    path: t('url.menu'),
    element: <Menu />,
  },
  {
    path: t('url.specialOffer'),
    element: <SpecialOffers />,
  },
  {
    path: t('url.store'),
    element: <Store />,
  },
  {
    path: `${t('url.products.storeProduct')}/:${RouteToProduct}`,
    element: <Product />,
  },
  {
    path: `${t('url.products.storeProductCheeses')}/:${RouteToProduct}`,
    element: <Product />,
  },
  {
    path: `${t('url.products.storeProductColdCuts')}/:${RouteToProduct}`,
    element: <Product />,
  },
  {
    path: `${t('url.products.storeProductDeli')}/:${RouteToProduct}`,
    element: <Product />,
  },
  {
    path: `${t('url.products.storeProductAlcohols')}/:${RouteToProduct}`,
    element: <Product />,
  },
  {
    path: `${t('url.products.storeProductCatering')}/:${RouteToProduct}`,
    element: <Product />,
  },
  {
    path: `${t('url.products.storeProductNews')}/:${RouteToProduct}`,
    element: <Product />,
  },
  {
    path: `${t('url.products.storeProductSales')}/:${RouteToProduct}`,
    element: <Product />,
  },
  {
    path: t('url.storeCheeses'),
    element: <Store />,
  },
  {
    path: t('url.storeColdCuts'),
    element: <ColdCuts />,
  },
  {
    path: t('url.storeDeli'),
    element: <Deli />,
  },
  {
    path: t('url.storeAlcohols'),
    element: <Alcohols />,
  },
  {
    path: t('url.storeCatering'),
    element: <Catering />,
  },
  {
    path: t('url.storeNews'),
    element: <News />,
  },
  {
    path: t('url.storeSales'),
    element: <Sales />,
  },
  {
    path: t('url.contact'),
    element: <Contact />,
  },
  {
    path: t('url.cart'),
    element: <Cart />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);
