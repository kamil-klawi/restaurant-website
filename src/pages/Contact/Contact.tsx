import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import { Pathname } from '../../utils/Pathname';

import s from './Contact.module.scss';

function Contact() {
  return (
    <>
      <Header />
      <div className={s.contact}>
        <div className={s.contact__header}>
          <div className={`${s.contact__pathname} my-8`}>
            A la française - restauracja francuska /&nbsp;
            <span className="capitalize">{Pathname()}</span>
          </div>
          <div className={s.contact__content}>
            <h2 className={s.contact__title}>Formularz kontaktowy</h2>
            <div className={s.contact__breakLine} />
            <p className={s.contact__description}>
              Zapraszamy do składania rezerwacji online i organizacji imprez
              okolicznościowych.Zachęcamy również do skorzystania z cateringu.
            </p>
            <p className={s.contact__description}>
              Jednocześnie zaznaczamy, że każdy wysłany formularz musi zostać
              potwierdzony poprzez kontakt zwrotny z restauracji.
            </p>
          </div>
        </div>
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
