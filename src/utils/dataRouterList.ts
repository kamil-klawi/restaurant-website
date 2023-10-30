import i18next from 'i18next';
import { AnchorProps } from '../types/AnchorProps';
import '../locales/i18n';

export const dataMenuRouterLinks: AnchorProps[] = [
  {
    href: '#popularDishes',
    name: i18next.t('navigation.menu.popularDishes'),
  },
  {
    href: '#breakfast',
    name: i18next.t('navigation.menu.breakfast'),
  },
  {
    href: '#sandwichBaguette',
    name: i18next.t('navigation.menu.sandwichBaguette'),
  },
  {
    href: '#croques',
    name: i18next.t('navigation.menu.croques'),
  },
  {
    href: '#appetizers',
    name: i18next.t('navigation.menu.appetizers'),
  },
  {
    href: '#mainDishes',
    name: i18next.t('navigation.menu.mainDishes'),
  },
  {
    href: '#galettes',
    name: i18next.t('navigation.menu.galettes'),
  },
  {
    href: '#crepes',
    name: i18next.t('navigation.menu.crepes'),
  },
  {
    href: '#desserts',
    name: i18next.t('navigation.menu.desserts'),
  },
];

export const dataSpecialOfferRouterLinks: AnchorProps[] = [
  {
    href: '#easterOffer',
    name: i18next.t('navigation.offers.easterOffer'),
  },
  {
    href: '#groupOffer',
    name: i18next.t('navigation.offers.groupOffer'),
  },
  {
    href: '#mayOffer',
    name: i18next.t('navigation.offers.mayOffer'),
  },
];
