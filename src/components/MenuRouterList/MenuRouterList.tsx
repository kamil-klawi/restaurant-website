import { MenuRouterListProps } from '../../types/MenuRouterListProps';
import Anchor from '../Anchor/Anchor';
import s from './MenuRouterList.module.scss';

function MenuRouterList(props: MenuRouterListProps) {
  return (
    <ul className={s.menuList}>
      {props.package &&
        props.package.map((link) => (
          <li className={s.menuList__item}>
            <Anchor
              className={`${s.menuList__link}`}
              href={link.href}
              name={link.name}
            />
          </li>
        ))}
    </ul>
  );
}

export default MenuRouterList;
