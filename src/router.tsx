import { createBrowserRouter } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Homepage from './pages/Homepage/Homepage';
import Menu from './pages/Menu/Menu';
import SpecialOffers from './pages/SpecialOffers/SpecialOffers';
import Store from './pages/Store/Store';
import Error from './pages/Error/Error';
import Alcohols from './pages/Alcohols/Alcohols';

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
    path: '/store/alcohols',
    element: <Alcohols />,
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
