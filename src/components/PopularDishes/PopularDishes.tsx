import MenuItem from '../MenuItem/MenuItem';
import s from './PopularDishes.module.scss';

function PopularDishes() {
  return (
    <div className={s.popularDishes}>
      <h4 className={s.popularDishes__header}>Najpopularniejsze dania</h4>
      <div className={s.popularDishes__breakline} />
      <div className={s.popularDishes__list}>
        <MenuItem
          name="Śniadanie francuskie: croissant, brioche, domowe konfitury, masło solone"
          ingredients=""
          price="26"
        />
        <MenuItem
          name="CROQUE MADAME"
          ingredients="Zapiekana kanapka z szynką, sosem beszamel i serem, do tego jajko sadzone"
          price="34"
        />
        <MenuItem
          name="Francuska zupa cebulowa z grzankami z serem cantal"
          ingredients=""
          price="25"
        />
        <MenuItem
          name="Paryski brunch"
          ingredients="Ser i wędliny francuskie, jajko sadzone, pomidor, korniszony, domowa konfitura i croissant"
          price="49"
        />
        <MenuItem
          name="Tradycyne bretoński gryczane naleśniki bezglutenowe"
          ingredients="Naleśniki serwowane z sałatą i domowym sosem winegret"
          price="od 35"
        />
      </div>
      <a href="/menu" className={s.popularDishes__btn}>
        sprawdź pełne menu
      </a>
    </div>
  );
}

export default PopularDishes;
