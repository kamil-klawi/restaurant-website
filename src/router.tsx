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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/special_offers',
    element: <SpecialOffers />,
  },
  {
    path: '/store',
    element: <Store />,
  },
  {
    path: '/store/cheeses',
    element: <Store />,
  },
  {
    path: '/store/cold_cuts',
    element: <ColdCuts />,
  },
  {
    path: '/store/deli',
    element: <Deli />,
  },
  {
    path: '/store/alcohols',
    element: <Alcohols />,
  },
  {
    path: '/store/catering',
    element: <Catering />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);
