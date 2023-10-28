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

export const dataCardMenu: CardProps[] = [
  {
    package: dataPopularDishes,
    id: 'popularDishes',
    title: 'Najpopularniejsze dania',
    description:
      'Poniżej przedstawiamy obecnie najczęściej zamawiane pozycje z menu sezonu 2023',
  },
  {
    package: dataBreakfast,
    id: 'breakfast',
    title: 'Śniadania',
    description:
      'Dopracowany i schludnie podany fundament każdego dnia, wcale nie musi być skomplikowany. Wedle opinii, to właśnie śniadania zapewniły nam miejsce na trójmiejskim podium.',
  },
  {
    package: dataSandwichBaguette,
    id: 'sandwichBaguette',
    title: 'Kanapki z bagietki',
    description:
      'Francuska klasyka w najlepszym wydaniu, czyli codziennie świeżo wypieczone bagietki w wybranej odsłonie.',
  },
  {
    package: dataCroques,
    id: 'croques',
    title: 'Croques',
    description:
      'Francuska klasyka w najlepszym wydaniu, czyli codziennie świeżo wypieczone bagietki w wybranej odsłonie.',
  },
  {
    package: dataAppetizers,
    id: 'appetizers',
    title: 'Przystawki',
    description:
      'Spróbuj popularne pozycje w oryginalnej wersji lub francuskie przysmaki, których próżno szukać gdzie indziej, bo któż nie skusi się na prawdziwą zupę cebulową bądź domową foie gras?!',
  },
  {
    package: dataMainDishes,
    id: 'mainDishes',
    title: 'Dania główne',
    description:
      'Niecodzienne kompozycje francuskiego stylu. Kompletne dania, które zaspokoją głodnych wrażeń śmiałków.',
  },

  {
    package: dataGalettes,
    id: 'galettes',
    title: 'Galettes',
    description:
      'Bretoński styl w najczystszej postaci, bezglutenowe gryczane naleśniki podane w sposób niespotykany nigdzie indziej w Trójmieście. Oryginał jest tylko jeden - Galette Complète, ale u nas dostępny jest z całą rodzinką. Dobierz galette według swoich ulubionych składników.',
  },
  {
    package: dataCrepes,
    id: 'crepes',
    title: 'Crépes',
    description:
      'Słodka fantazja znana każdemu bez wyjątku już od dzieciństwa. Podobno te w A la francaise najlepiej smakują o każdej porze dnia. Nasza domowa nutella i domowy słony karmel, często ułatwiają podjęcie tej decyzji. Klasykiem w tej kategorii niezmiennie pozostaje legendarny, przesiąknięty Francją - Crêpe Suzette.',
  },
  {
    package: dataDesserts,
    id: 'desserts',
    title: 'Desery',
    description:
      'Prawdziwe chwile szczęścia to czekolada wypływająca z Fondant, łącząca się z lodami waniliowymi. Lecz niezależnie od wyboru, każdy z naszych deserów zabierze Cię prosto do raju.',
  },
];

export const dataCardSpecialMenu: CardProps[] = [
  {
    package: dataEasterOffer,
    id: 'easterOffer',
    title: 'Oferta wielkanocna',
    description:
      'Poniżej przedstawiamy obecnie najczęściej zamawiane pozycje z menu sezonu 2023',
  },
  {
    package: dataGroupOffer,
    id: 'groupOffer',
    title: 'Oferta grupowa',
    description:
      'Poniżej przedstawiamy obecnie najczęściej zamawiane pozycje z menu sezonu 2023',
  },
  {
    package: dataMayOffer,
    id: 'mayOffer',
    title: 'Oferta majówkowa',
    description:
      'Poniżej przedstawiamy obecnie najczęściej zamawiane pozycje z menu sezonu 2023',
  },
];
