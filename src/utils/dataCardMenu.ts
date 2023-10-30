import i18next from 'i18next';
import { CardProps } from '../types/CardProps';
import {
  dataPopularDishes,
  dataBreakfast,
  dataSandwichBaguette,
  dataCroques,
  dataAppetizers,
  dataMainDishes,
  dataGalettes,
  dataCrepes,
  dataDesserts,
  dataEasterOffer,
  dataGroupOffer,
  dataMayOffer,
} from './dataMenuList';
import '../locales/i18n';

export const dataCardMenu: CardProps[] = [
  {
    package: dataPopularDishes,
    id: 'popularDishes',
    title: i18next.t('navigation.menu.popularDishes'),
    description: i18next.t('popularDishesText'),
  },
  {
    package: dataBreakfast,
    id: 'breakfast',
    title: i18next.t('navigation.menu.breakfast'),
    description: i18next.t('breakfastText'),
  },
  {
    package: dataSandwichBaguette,
    id: 'sandwichBaguette',
    title: i18next.t('navigation.menu.sandwichBaguette'),
    description: i18next.t('sandwichBaguetteText'),
  },
  {
    package: dataCroques,
    id: 'croques',
    title: i18next.t('navigation.menu.croques'),
    description: i18next.t('croquesText'),
  },
  {
    package: dataAppetizers,
    id: 'appetizers',
    title: i18next.t('navigation.menu.appetizers'),
    description: i18next.t('appetizersText'),
  },
  {
    package: dataMainDishes,
    id: 'mainDishes',
    title: i18next.t('navigation.menu.mainDishes'),
    description: i18next.t('mainDishesText'),
  },

  {
    package: dataGalettes,
    id: 'galettes',
    title: i18next.t('navigation.menu.galettes'),
    description: i18next.t('galettesText'),
  },
  {
    package: dataCrepes,
    id: 'crepes',
    title: i18next.t('navigation.menu.crepes'),
    description: i18next.t('crepesText'),
  },
  {
    package: dataDesserts,
    id: 'desserts',
    title: i18next.t('navigation.menu.desserts'),
    description: i18next.t('dessertsText'),
  },
];

export const dataCardSpecialMenu: CardProps[] = [
  {
    package: dataEasterOffer,
    id: 'easterOffer',
    title: i18next.t('navigation.offers.easterOffer'),
    description: i18next.t('popularDishesText'),
  },
  {
    package: dataGroupOffer,
    id: 'groupOffer',
    title: i18next.t('navigation.offers.groupOffer'),
    description: i18next.t('popularDishesText'),
  },
  {
    package: dataMayOffer,
    id: 'mayOffer',
    title: i18next.t('navigation.offers.mayOffer'),
    description: i18next.t('popularDishesText'),
  },
];
