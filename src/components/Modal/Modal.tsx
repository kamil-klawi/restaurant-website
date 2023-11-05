import { useTranslation } from 'react-i18next';
import { ModalProps } from '../../types/ModalProps';
import CounterPick from '../Picker/CounterPick';
import RadioButton from '../RadioButton/RadioButton';

import s from './Modal.module.scss';
import { useStore } from '../../store/useStore';
import { FormEvent } from 'react';

function Modal(props: ModalProps) {
  const addProduct = useStore((state) => state.addProduct);
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    addProduct(props.title, props.body, props.price, props.weight);
  };

  return (
    <div className={s.modal}>
      <div className={s.modal__wrapper}>
        <button
          type="button"
          className={s.modal__closeButton}
          onClick={() => props.closeModal(false)}
        >
          X
        </button>
        <div className={s.modal__content}>
          <h1 className={s.modal__title}>{props.title}</h1>
          <p className={s.modal__body}>{props.body}</p>
        </div>
        <form onSubmit={handleSubmit} className={s.modal__form}>
          <div className={s.modal__container}>
            <div>
              <label className={s.modal__label}>
                {t('modal.weightToChoose')}
              </label>
              <RadioButton checked={true} label={props.weight} name="radio" />
            </div>
            <div>
              <label className={s.modal__label}>{t('modal.price')}</label>
              <p className={s.modal__price}>{props.price}zł</p>
            </div>
            <div>
              <label className={s.modal__label}>{t('modal.amount')}</label>
              <CounterPick />
            </div>
          </div>
          <div>
            <button className={s.modal__btn} type="submit">
              {t('modal.buyNow')}
            </button>
            <button className={s.modal__btn} type="submit">
              {t('modal.addToCart')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
