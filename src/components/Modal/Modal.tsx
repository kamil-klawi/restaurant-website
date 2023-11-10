import { useTranslation } from 'react-i18next';
import { ModalProps } from '../../types/ModalProps';
import CounterPick from '../Picker/CounterPick';
import RadioButton from '../RadioButton/RadioButton';

import s from './Modal.module.scss';
import { useStore } from '../../store/useStore';
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

export let RouteToProduct: string | undefined;

function Modal(props: ModalProps) {
  const addProduct = useStore((state) => state.addProduct);
  const { t } = useTranslation();

  RouteToProduct = props.title?.replaceAll(' ', '-');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    alert(t('message.AddProductToCart'));
    addProduct(
      props.title,
      props.body,
      props.price,
      props.weight,
      props.imageURL,
      props.imageALT,
    );
  };

  return (
    <div className={s.modal}>
      <div className={s.modal__wrapper}>
        <div className="p-8">
          <button
            type="button"
            className={s.modal__closeButton}
            onClick={() => props.closeModal(false)}
          >
            X
          </button>
        </div>
        <img
          src={props.imageURL}
          alt={props.imageALT}
          className={s.modal__image}
        />
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
            <Link
              to={props.title?.replaceAll(' ', '-')}
              state={{
                tag: props.tag,
                title: props.title,
                body: props.body,
                price: props.price,
                weight: props.weight,
                imageURL: props.imageURL,
                imageALT: props.imageALT,
              }}
              className={s.modal__btn}
            >
              {t('modal.buyNow')}
            </Link>
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
