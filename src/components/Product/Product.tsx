import { useStore } from '../../store/useStore';
import { TCart } from '../../types/IProduct';
import CounterPick from '../Picker/CounterPick';
import s from './Product.module.scss';

function Product({ title, weight, price }: TCart) {
  const removeProduct = useStore((state) => state.removeProduct);

  return (
    <div className={s.product}>
      <button onClick={() => removeProduct(title)} className={s.product__btn}>
        X
      </button>
      <div className={s.product__content}>
        <h2 className={s.product__title}>{title}</h2>
        <p className={s.product__weight}>waga: {weight}</p>
      </div>
      <div>
        <CounterPick />
      </div>
      <div className={s.product__price}>{price}zł</div>
    </div>
  );
}

export default Product;
