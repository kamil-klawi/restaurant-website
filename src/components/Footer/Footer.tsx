import s from './Footer.module.scss';

function Footer() {
  return (
    <>
      <div className={s.footer}>
        <div className="container mx-auto">
          <div className={s.footer__table}>
            <div className={s.footer__section}>
              <h4>nawigacja</h4>
              <ul>
                <li>
                  <a href="/">strona główna</a>
                </li>
                <li>
                  <a href="/menu">menu</a>
                </li>
                <li>
                  <a href="/special_offers">oferta specjalna</a>
                </li>
                <li>
                  <a href="/store">sklep</a>
                </li>
                <li>
                  <a href="/contact">kontakt</a>
                </li>
              </ul>
            </div>
            <div className={s.footer__section}>
              <h4>informacje</h4>
              <ul>
                <li>
                  <a href="/voucher">voucher podarunkowy</a>
                </li>
                <li>
                  <a href="/delivery">koszt dostawy</a>
                </li>
                <li>
                  <a href="/delivery_area">obszar dostawy</a>
                </li>
                <li>
                  <a href="/statute">regulamin</a>
                </li>
                <li>
                  <a href="/privacy_police">polityka prywatności</a>
                </li>
              </ul>
            </div>
            <div className={s.footer__section}>
              <h4>kontakt</h4>
              <ul>
                <li>
                  <h5>Adres:</h5>
                </li>
                <li>
                  <p>ul. Spichrzowa 24, 80-750 Gdańsk - Śródmieście</p>
                </li>
                <li>
                  <h5>Telefon:</h5>
                </li>
                <li>
                  <p>58 765 11 12</p>
                </li>
                <li>
                  <IconList />
                </li>
              </ul>
            </div>
          </div>
          <div className={s.footer__copyright}>
            <p>Copyright &copy; A La Francaise 2021</p>
            <p>Realizacje IMSET.IT</p>
          </div>
        </div>
        <div className={s.footer__map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376.9838621250976!2d18.657653043447983!3d54.347186677883315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd73a13d522aa3%3A0xe42498def634ff7b!2sA%20la%20fran%C3%A7aise!5e0!3m2!1sen!2spl!4v1629718225151!5m2!1sen!2spl"></iframe>
        </div>
      </div>
    </>
  );
}

function IconList() {
  return (
    <ul className={s.section__iconList}>
      <li>
        <a href="https://www.facebook.com/po.francusku/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/alafrancaisegdansk/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://www.tripadvisor.com/Restaurant_Review-g274725-d4607592-Reviews-A_la_francaise_Bistro_Cafe_Delikatesy-Gdansk_Pomerania_Province_Northern_Poland.html"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z"></path>
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default Footer;
