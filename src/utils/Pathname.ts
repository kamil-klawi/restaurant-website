export function Pathname() {
  const path = window.location.pathname.replace('/', '');
  switch (path) {
    case 'menu':
      return 'menu';
    case 'special_offers':
      return 'oferty specjalne';
    case 'store':
      return 'sklep';
    case 'contact':
      return 'kontakt';
  }
}
