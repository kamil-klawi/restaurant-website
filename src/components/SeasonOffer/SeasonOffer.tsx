import s from './SeasonOffer.module.scss';
import { ISeasonOffer } from '../../types/ISeasonOffer';

function SeasonOffer({ title, subText, body, btn }: ISeasonOffer) {
  return (
    <div className={s.seasonOffer}>
      <div className={`${s.seasonOffer__image} ${s.image__a}`} />
      <div className={s.seasonOffer__content}>
        <h2 className={s.seasonOffer__header}>{title}</h2>
        <div className={s.seasonOffer__breakLine} />
        <p className={`${s.seasonOffer__text} ${s.seasonOffer__text_black}`}>
          {subText}
        </p>
        <p className={s.seasonOffer__text}>{body}</p>
        <a className={s.seasonOffer__btn} href="/menu">
          {btn}
        </a>
      </div>
      <div className={`${s.seasonOffer__image} ${s.image__b}`} />
      <div className={`${s.seasonOffer__image} ${s.image__c}`} />
    </div>
  );
}

export default SeasonOffer;
