import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MenuRouterList from '../../components/MenuRouterList/MenuRouterList';
import Newsletter from '../../components/Newsletter/Newsletter';
import { Pathname } from '../../utils/Pathname';
import {
  dataEasterOffer,
  dataGroupOffer,
  dataMayOffer,
} from '../../utils/dataMenuList';
import { dataSpecialOfferRouterLinks } from '../../utils/dataRouterList';
import s from './SpecialOffers.module.scss';

function SpecialOffers() {
  return (
    <>
      <Header />
      <div className={s.specialOffer}>
        <div>
          <div className={`${s.specialOffer__pathname} my-8`}>
            A la française - restauracja francuska /&nbsp;
            <span className="capitalize">{Pathname()}</span>
          </div>
          <MenuRouterList package={dataSpecialOfferRouterLinks} />
        </div>
        <div>
          <Card
            package={dataEasterOffer}
            id="easterOffer"
            title="Oferta wielkanocna"
            description="Poniżej przedstawiamy obecnie najczęściej zamawiane pozycje z menu
            sezonu 2023"
          />
          <Card
            package={dataGroupOffer}
            id="groupOffer"
            title="Oferta grupowa"
            description="Poniżej przedstawiamy obecnie najczęściej zamawiane pozycje z menu
            sezonu 2023"
          />
          <Card
            package={dataMayOffer}
            id="mayOffer"
            title="Oferta majówkowa"
            description="Poniżej przedstawiamy obecnie najczęściej zamawiane pozycje z menu
            sezonu 2023"
          />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default SpecialOffers;
