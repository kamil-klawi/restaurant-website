import AboutImage01 from '../../assets/images/21-gryczany-nalesnik01.jpg';
import AboutImage02 from '../../assets/images/20-cebulowa-zupa09.jpg';
import s from './About.module.scss';

function About() {
  return (
    <div className={s.card}>
      <div className={s.card__content}>
        <h2 className={s.card__header}>Nasze menu</h2>
        <div className={s.card__breakLine} />
        <p className={s.card__text}>
          Posiadamy bogatą ofertę śniadań, obiadów i kolacji utrzymanych w duchu
          oryginalnej kuchni francuskiej, a nasze posiłki dopełniają wspaniałe
          wina.
        </p>
        <a className={s.card__btn} href="/menu">
          sprawdź menu
        </a>
      </div>
      <div className={s.card__image}>
        <img src={AboutImage01} alt="gryczany nalesnik" />
      </div>
      <div className={s.card__image}>
        <img src={AboutImage02} alt="cebulowa zupa" />
      </div>
      <div className={s.card__content}>
        <div className={s.card__title}>
          <h2 className={s.card__header}>O nas</h2>
          <div className={s.card__breakLine} />
        </div>
        <p className={s.card__text}>
          Restauracja jest dziełem Joanny i Dominique'a Chesnais. Dominique jest
          francuskim szefem kuchni z długoletnim międzynarodowym doświadczeniem
          pochodzącym z urokliwej Bretanii. Jest on inspiracją dla swoich
          kucharzy, tworzących dopracowane dania o niepowtarzalnym smaku.
          Oryginalny wystrój lokalu stanowi podstawę jego charakteru, a pełen
          pasji zespół buduje rodzinną atmosferę. W skrócie, jest po francusku,
          czyli A la Francaise.
        </p>
      </div>
    </div>
  );
}

export default About;
