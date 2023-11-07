import { useTranslation } from 'react-i18next';

export function Pathname() {
  const { t } = useTranslation();
  const path = window.location.pathname.replace('/', '');
  switch (path) {
    case 'menu':
      return t('pathname.menu');
    case 'special_offers':
      return t('pathname.specialOffers');
    case 'store':
      return t('pathname.store');
    case 'store/cheeses':
      return t('pathname.storeCheeses');
    case 'store/cold_cuts':
      return t('pathname.storeColdCuts');
    case 'store/deli':
      return t('pathname.storeDeli');
    case 'store/alcohols':
      return t('pathname.storeAlcohols');
    case 'store/catering':
      return t('pathname.storeCatering');
    case 'store/news':
      return t('pathname.storeNews');
    case 'store/sales':
      return t('pathname.storeSales');
    case 'contact':
      return t('pathname.contact');
  }
}
