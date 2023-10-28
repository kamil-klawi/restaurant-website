import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MenuRouterList from '../../components/MenuRouterList/MenuRouterList';
import Newsletter from '../../components/Newsletter/Newsletter';
import { Pathname } from '../../utils/Pathname';
import { dataCardSpecialMenu } from '../../utils/dataCardMenu';
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
          {dataCardSpecialMenu &&
            dataCardSpecialMenu.map((dish) => (
              <Card
                package={dish.package}
                id={dish.id}
                title={dish.title}
                description={dish.description}
              />
            ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default SpecialOffers;
