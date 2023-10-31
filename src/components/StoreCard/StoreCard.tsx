import { useTranslation } from 'react-i18next';
import { StoreCardProps } from '../../types/StoreCardProps';

import s from './StoreCard.module.scss';

function StoreCard(props: StoreCardProps) {
  const { t } = useTranslation();
  return (
    <div className={s.card}>
      <h2 className={s.card__header}>{props.title}</h2>
      <p className={s.card__body}>{props.body}</p>
      <button className={s.card__button} onClick={() => props.openModal(true)}>
        {t('modal.addToCart')}
      </button>
    </div>
  );
}

export default StoreCard;
