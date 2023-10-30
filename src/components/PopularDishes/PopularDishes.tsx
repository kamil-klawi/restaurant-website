import { useTranslation } from 'react-i18next';
import { dataHomePopular } from '../../utils/dataMenuList';
import MenuItem from '../MenuItem/MenuItem';
import s from './PopularDishes.module.scss';

function PopularDishes() {
  const { t } = useTranslation();
  return (
    <div className={s.popularDishes}>
      <h4 className={s.popularDishes__header}>
        {t('navigation.menu.popularDishes')}
      </h4>
      <div className={s.popularDishes__breakline} />
      <div className={s.popularDishes__list}>
        {dataHomePopular &&
          dataHomePopular.map((dish) => (
            <MenuItem
              price={dish.price}
              name={dish.name}
              ingredients={dish.ingredients}
            />
          ))}
      </div>
      <a href="/menu" className={s.popularDishes__btn}>
        {t('homepage.btnCheckAllMenu')}
      </a>
    </div>
  );
}

export default PopularDishes;
