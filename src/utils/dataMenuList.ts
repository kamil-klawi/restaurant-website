import i18next from 'i18next';
import { MenuItemProps } from '../types/MenuItemProps';
import '../locales/i18n';

export const dataPopularDishes: MenuItemProps[] = [
  {
    name: i18next.t('menu.frenchBreakfast.name'),
    ingredients: i18next.t('menu.frenchBreakfast.ingredients'),
    price: '26',
  },
  {
    name: i18next.t('menu.croqueMadame.name'),
    ingredients: i18next.t('menu.croqueMadame.ingredients'),
    price: '34',
  },
];

export const dataBreakfast: MenuItemProps[] = [
  {
    name: i18next.t('menu.PtitDej.name'),
    ingredients: i18next.t('menu.PtitDej.ingredients'),
    price: '26',
  },
  {
    name: i18next.t('menu.frenchOmlette.name'),
    ingredients: i18next.t('menu.frenchOmlette.ingredients'),
    price: '26',
  },
  {
    name: i18next.t('menu.polishBreakfast.name'),
    ingredients: i18next.t('menu.polishBreakfast.ingredients'),
    price: '30',
  },
  {
    name: i18next.t('menu.englishBreakfast.name'),
    ingredients: i18next.t('menu.englishBreakfast.ingredients'),
    price: '36',
  },
  {
    name: i18next.t('menu.parisianBrunch.name'),
    ingredients: i18next.t('menu.parisianBrunch.ingredients'),
    price: '49',
  },
  {
    name: i18next.t('menu.painPerdu.name'),
    ingredients: i18next.t('menu.painPerdu.ingredients'),
    price: '26',
  },
  {
    name: i18next.t('menu.homemadeGranola.name'),
    ingredients: i18next.t('menu.homemadeGranola.ingredients'),
    price: '26',
  },
  {
    name: i18next.t('menu.oatmeal.name'),
    ingredients: i18next.t('menu.oatmeal.ingredients'),
    price: '24',
  },
];

export const dataSandwichBaguette: MenuItemProps[] = [
  {
    name: i18next.t('menu.goat.name'),
    ingredients: i18next.t('menu.goat.ingredients'),
    price: '26',
  },
  {
    name: i18next.t('menu.chicken.name'),
    ingredients: i18next.t('menu.chicken.ingredients'),
    price: '28',
  },
  {
    name: i18next.t('menu.driedFrenchSausage.name'),
    ingredients: i18next.t('menu.driedFrenchSausage.ingredients'),
    price: '36',
  },
  {
    name: i18next.t('menu.pie.name'),
    ingredients: i18next.t('menu.pie.ingredients'),
    price: '27',
  },
];

export const dataCroques: MenuItemProps[] = [
  {
    name: i18next.t('menu.croqueMadame.name'),
    ingredients: i18next.t('menu.croqueMadame.ingredients'),
    price: '34',
  },
  {
    name: i18next.t('menu.croqueVege.name'),
    ingredients: i18next.t('menu.croqueVege.ingredients'),
    price: '35',
  },
  {
    name: i18next.t('menu.croqueSaumon.name'),
    ingredients: i18next.t('menu.croqueSaumon.ingredients'),
    price: '36',
  },
];

export const dataAppetizers: MenuItemProps[] = [
  {
    name: i18next.t('menu.snails.name'),
    ingredients: i18next.t('menu.snails.ingredients'),
    price: '38',
  },
  {
    name: i18next.t('menu.tapas.name'),
    ingredients: i18next.t('menu.tapas.ingredients'),
    price: '37',
  },
  {
    name: i18next.t('menu.frenchCheese.name'),
    ingredients: i18next.t('menu.frenchCheese.ingredients'),
    price: '40',
  },
  {
    name: i18next.t('menu.frenchCheeseAndMeat.name'),
    ingredients: i18next.t('menu.frenchCheeseAndMeat.ingredients'),
    price: '49',
  },
  {
    name: i18next.t('menu.bakedTomatoCream.name'),
    ingredients: i18next.t('menu.bakedTomatoCream.ingredients'),
    price: '21',
  },
  {
    name: i18next.t('menu.frenchOnionSoup.name'),
    ingredients: i18next.t('menu.frenchOnionSoup.ingredients'),
    price: '25',
  },
];

export const dataMainDishes: MenuItemProps[] = [
  {
    name: i18next.t('menu.raclette.name'),
    ingredients: i18next.t('menu.raclette.ingredients'),
    price: '51',
  },
  {
    name: i18next.t('menu.frenduckLegchOnionSoup.name'),
    ingredients: i18next.t('menu.duckLeg.ingredients'),
    price: '55',
  },
  {
    name: i18next.t('menu.cocotteFish.name'),
    ingredients: i18next.t('menu.cocotteFish.ingredients'),
    price: '50',
  },
];

export const dataGalettes: MenuItemProps[] = [
  {
    name: i18next.t('menu.set.name'),
    ingredients: i18next.t('menu.set.ingredients'),
    price: '35',
  },
  {
    name: i18next.t('menu.papaj.name'),
    ingredients: i18next.t('menu.papaj.ingredients'),
    price: '37',
  },
  {
    name: i18next.t('menu.rural.name'),
    ingredients: i18next.t('menu.rural.ingredients'),
    price: '36',
  },
  {
    name: i18next.t('menu.ocean.name'),
    ingredients: i18next.t('menu.ocean.ingredients'),
    price: '39',
  },
];

export const dataCrepes: MenuItemProps[] = [
  {
    name: i18next.t('menu.pancake.name'),
    ingredients: i18next.t('menu.pancake.ingredients'),
    price: '18',
  },
  {
    name: i18next.t('menu.pancakeMascarpone.name'),
    ingredients: i18next.t('menu.pancakeMascarpone.ingredients'),
    price: '28',
  },
  {
    name: i18next.t('menu.pancakeBanana.name'),
    ingredients: i18next.t('menu.pancakeBanana.ingredients'),
    price: '28',
  },
  {
    name: i18next.t('menu.crepeSuzette.name'),
    ingredients: i18next.t('menu.crepeSuzette.ingredients'),
    price: '34',
  },
];

export const dataDesserts: MenuItemProps[] = [
  {
    name: i18next.t('menu.fondantChocolate.name'),
    ingredients: i18next.t('menu.fondantChocolate.ingredients'),
    price: '25',
  },
  {
    name: i18next.t('menu.homemadeChocolateCream.name'),
    ingredients: i18next.t('menu.homemadeChocolateCream.ingredients'),
    price: '21',
  },
];

export const dataEasterOffer: MenuItemProps[] = [
  {
    name: i18next.t('menu.frenchBreakfast.name'),
    ingredients: i18next.t('menu.frenchBreakfast.ingredients'),
    price: '26',
  },
  {
    name: i18next.t('menu.croqueMadame.name'),
    ingredients: i18next.t('menu.croqueMadame.ingredients'),
    price: '34',
  },
];

export const dataGroupOffer: MenuItemProps[] = [
  {
    name: i18next.t('menu.frenchBreakfast.name'),
    ingredients: i18next.t('menu.frenchBreakfast.ingredients'),
    price: '26',
  },
  {
    name: i18next.t('menu.croqueMadame.name'),
    ingredients: i18next.t('menu.croqueMadame.ingredients'),
    price: '34',
  },
];

export const dataMayOffer: MenuItemProps[] = [
  {
    name: i18next.t('menu.frenchBreakfast.name'),
    ingredients: i18next.t('menu.frenchBreakfast.ingredients'),
    price: '26',
  },
  {
    name: i18next.t('menu.croqueMadame.name'),
    ingredients: i18next.t('menu.croqueMadame.ingredients'),
    price: '34',
  },
];

export const dataHomePopular: MenuItemProps[] = [
  {
    name: i18next.t('menu.frenchBreakfast.name'),
    ingredients: i18next.t('menu.frenchBreakfast.ingredients'),
    price: '26',
  },
  {
    name: i18next.t('menu.croqueMadame.name'),
    ingredients: i18next.t('menu.croqueMadame.ingredients'),
    price: '34',
  },
  {
    name: i18next.t('menu.frenchOnionSoup.name'),
    ingredients: i18next.t('menu.frenchOnionSoup.ingredients'),
    price: '25',
  },
  {
    name: i18next.t('menu.parisianBrunch.name'),
    ingredients: i18next.t('menu.parisianBrunch.ingredients'),
    price: '49',
  },
  {
    name: i18next.t('menu.traditionalBreton.name'),
    ingredients: i18next.t('menu.traditionalBreton.ingredients'),
    price: 'od 35',
  },
];
