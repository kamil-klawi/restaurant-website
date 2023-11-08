import { useTranslation } from 'react-i18next';
import { StoreCardProps } from '../../types/StoreCardProps';

import s from './StoreCard.module.scss';

function StoreCard(props: StoreCardProps) {
  const { t } = useTranslation();
  return (
    <div className={s.card}>
      <img
        src={props.imageURL}
        alt={props.imageALT}
        className={s.card__image}
      />
      <div className={s.card__content}>
        <h2 className={s.card__header}>{props.title}</h2>
        <p className={s.card__body}>{props.price}zł</p>
        <button
          className={s.card__button}
          onClick={() => {
            props.openModal(true);
            props.setProduct();
          }}
        >
          {t('modal.addToCart')}
        </button>
      </div>
    </div>
  );
}

export default StoreCard;
