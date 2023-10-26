import s from './SeasonOffer.module.scss';

function SeasonOffer() {
  return (
    <div className={s.seasonOffer}>
      <div className={`${s.seasonOffer__image} ${s.image__a}`} />
      <div className={s.seasonOffer__content}>
        <h2 className={s.seasonOffer__header}>Oferta sezonowa, catering</h2>
        <div className={s.seasonOffer__breakLine} />
        <p className={`${s.seasonOffer__text} ${s.seasonOffer__text_black}`}>
          Nieoficjalne spotkanie z przyjaciółmi przy wspólnym Raclette? Czy może
          elegancka impreza urodzinowa z pysznym tortem Fraisier?
        </p>
        <p className={s.seasonOffer__text}>
          To od Was zależy, jak i co u nas świętujecie, a od nas Wasze
          wyśmienite doznania smakowe, w bretońskim klimacie i miłej atmosferze.
          Domowy wieczór z deską francuskich serów i wędlin lub pełny catering z
          okazji... i bez okazji, z odbiorem osobistym lub dowozem na terenie
          Trójmiasta. Okoliczności do tego aby ucztować jest wiele, a ich
          aranżacja tylko z A la Francaise.
        </p>
        <a className={s.seasonOffer__btn} href="/menu">
          sprawdź aktualną ofertę
        </a>
      </div>
      <div className={`${s.seasonOffer__image} ${s.image__b}`} />
      <div className={`${s.seasonOffer__image} ${s.image__c}`} />
    </div>
  );
}

export default SeasonOffer;
