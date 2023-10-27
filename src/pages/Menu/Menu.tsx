import { Pathname } from '../../utils/Pathname';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MenuRouterList from '../../components/MenuRouterList/MenuRouterList';

//  styles
import s from './Menu.module.scss';
import Card from '../../components/Card/Card';
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
} from '../../utils/dataMenuList';
import Newsletter from '../../components/Newsletter/Newsletter';
import { dataMenuRouterLinks } from '../../utils/dataRouterList';

function Menu() {
  useDocumentTitle('Menu');

  return (
    <>
      <Header />
      <div className={s.menu}>
        <div>
          <div className={`${s.menu__pathname} my-8`}>
            A la française - restauracja francuska /&nbsp;
            <span className="capitalize">{Pathname()}</span>
          </div>
          <MenuRouterList package={dataMenuRouterLinks} />
        </div>
        <Card
          package={dataPopularDishes}
          id="popularDishes"
          title="Najpopularniejsze dania"
          description="Poniżej przedstawiamy obecnie najczęściej zamawiane pozycje z menu
            sezonu 2023"
        />
        <Card
          package={dataBreakfast}
          id="breakfast"
          title="Śniadania"
          description="Dopracowany i schludnie podany fundament każdego dnia, wcale nie musi być skomplikowany. Wedle opinii, to właśnie śniadania zapewniły nam miejsce na trójmiejskim podium."
        />
        <Card
          package={dataSandwichBaguette}
          id="sandwichBaguette"
          title="Kanapki z bagietki"
          description="Francuska klasyka w najlepszym wydaniu, czyli codziennie świeżo wypieczone bagietki w wybranej odsłonie."
        />
        <Card
          package={dataCroques}
          id="croques"
          title="Croques"
          description="Francuska klasyka w najlepszym wydaniu, czyli codziennie świeżo wypieczone bagietki w wybranej odsłonie."
        />
        <Card
          package={dataAppetizers}
          id="appetizers"
          title="Przystawki"
          description="Spróbuj popularne pozycje w oryginalnej wersji lub francuskie przysmaki, których próżno szukać gdzie indziej, bo któż nie skusi się na prawdziwą zupę cebulową bądź domową foie gras?!"
        />
        <Card
          package={dataMainDishes}
          id="mainDishes"
          title="Dania główne"
          description="Niecodzienne kompozycje francuskiego stylu. Kompletne dania, które zaspokoją głodnych wrażeń śmiałków."
        />
        <Card
          package={dataGalettes}
          id="galettes"
          title="Galettes"
          description="Bretoński styl w najczystszej postaci, bezglutenowe gryczane naleśniki podane w sposób niespotykany nigdzie indziej w Trójmieście. Oryginał jest tylko jeden - Galette Complète, ale u nas dostępny jest z całą rodzinką. Dobierz galette według swoich ulubionych składników."
        />
        <Card
          package={dataCrepes}
          id="crepes"
          title="Crépes"
          description="Słodka fantazja znana każdemu bez wyjątku już od dzieciństwa. Podobno te w A la francaise najlepiej smakują o każdej porze dnia. Nasza domowa nutella i domowy słony karmel, często ułatwiają podjęcie tej decyzji. Klasykiem w tej kategorii niezmiennie pozostaje legendarny, przesiąknięty Francją - Crêpe Suzette."
        />
        <Card
          package={dataDesserts}
          id="desserts"
          title="Desery"
          description="Prawdziwe chwile szczęścia to czekolada wypływająca z Fondant, łącząca się z lodami waniliowymi. Lecz niezależnie od wyboru, każdy z naszych deserów zabierze Cię prosto do raju."
        />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Menu;
