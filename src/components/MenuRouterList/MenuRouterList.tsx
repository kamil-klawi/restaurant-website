import Anchor from '../Anchor/Anchor';
import s from './MenuRouterList.module.scss';

function MenuRouterList() {
  return (
    <ul className={s.menuList}>
      <li className={s.menuList__item}>
        <Anchor
          className={`${s.menuList__link}`}
          href="#popularDishes"
          name="Najpopularniejsze dania"
        />
      </li>
      <li className={s.menuList__item}>
        <Anchor
          className={`${s.menuList__link}`}
          href="#breakfast"
          name="Śniadania"
        />
      </li>
      <li className={s.menuList__item}>
        <Anchor
          className={`${s.menuList__link}`}
          href="#sandwichBaguette"
          name="Kanapki z bagietki"
        />
      </li>
      <li className={s.menuList__item}>
        <Anchor
          className={`${s.menuList__link}`}
          href="#croques"
          name="Croques"
        />
      </li>
      <li className={s.menuList__item}>
        <Anchor
          className={`${s.menuList__link}`}
          href="#appetizers"
          name="Przystawki"
        />
      </li>
      <li className={s.menuList__item}>
        <Anchor
          className={`${s.menuList__link}`}
          href="#mainDishes"
          name="Dania główne"
        />
      </li>
      <li className={s.menuList__item}>
        <Anchor
          className={`${s.menuList__link}`}
          href="#galettes"
          name="Galettes"
        />
      </li>
      <li className={s.menuList__item}>
        <Anchor
          className={`${s.menuList__link}`}
          href="#crepes"
          name="Crépes"
        />
      </li>
      <li className={s.menuList__item}>
        <Anchor
          className={`${s.menuList__link}`}
          href="#desserts"
          name="Desery"
        />
      </li>
    </ul>
  );
}

export default MenuRouterList;
