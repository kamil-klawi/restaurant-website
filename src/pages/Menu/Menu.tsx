import { Pathname } from '../../utils/Pathname';
import { dataMenuRouterLinks } from '../../utils/dataRouterList';
import { dataCardMenu } from '../../utils/dataCardMenu';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MenuRouterList from '../../components/MenuRouterList/MenuRouterList';
import Card from '../../components/Card/Card';
import Newsletter from '../../components/Newsletter/Newsletter';

//  styles
import s from './Menu.module.scss';
import { useTranslation } from 'react-i18next';

function Menu() {
  const { t } = useTranslation();
  useDocumentTitle(`${t('navigation.header.menu').toUpperCase()}`);

  return (
    <>
      <Header />
      <div className={s.menu}>
        <div>
          <div className={`${s.menu__pathname} my-8`}>
            {t('homeURL')} /&nbsp;
            <span className="capitalize">{Pathname()}</span>
          </div>
          <MenuRouterList package={dataMenuRouterLinks} />
        </div>
        {dataCardMenu &&
          dataCardMenu.map((dish, index) => (
            <Card
              key={index}
              package={dish.package}
              id={dish.id}
              title={dish.title}
              description={dish.description}
            />
          ))}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Menu;
