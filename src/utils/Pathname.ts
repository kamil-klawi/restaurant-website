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
    case 'contact':
      return t('pathname.contact');
  }
}
