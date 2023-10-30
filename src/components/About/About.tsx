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
          Wszystkie kulinarne specjały w A la francaise są dziełem Dominique'a,
          kucharza z Bretanii. Od dziecka marzył o gotowaniu i pieczeniu dla
          innych. Zawodu uczył się w szkole gastronomicznej w Dinard, gdzie w
          1997 r. otrzymał dyplom BTS. Zanim osiadł w Gdańsku szlifował swój
          talent w restauracjach Anglii, Irlandii oraz rodzimej Bretanii.
        </p>
        <p className={s.card__text}>
          Współwłaścicielką restauracji jest, pochodząca z Mazur, Joanna. Po
          ukończeniu Technikum Hotelarskiego w Mrągowie kontynuowała naukę na UJ
          w Krakowie kończąc ją tytułem magistra Zarządzania w turystce. Sztuki
          kelnerstwa uczyła się w restauracjach na Mazurach, w Krakowie oraz we
          Francji.
        </p>
      </div>
    </div>
  );
}

export default About;
