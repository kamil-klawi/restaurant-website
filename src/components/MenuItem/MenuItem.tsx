import { MenuItemProps } from '../../types/MenuItemProps';
import s from './MenuItem.module.scss';

function MenuItem(props: MenuItemProps) {
  return (
    <div className={s.menuItem}>
      <div className="flex justify-between">
        <h4 className={s.menuItem__header}>{props.name}</h4>
        <h4 className={`${s.menuItem__header} ${s.menuItem__header_price}`}>
          {props.price}&nbsp;zł
        </h4>
      </div>
      <div className={s.menuItem__breakline} />
      <p className={s.menuItem__description}>{props.ingredients}</p>
    </div>
  );
}

export default MenuItem;
