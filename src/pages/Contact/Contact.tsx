import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import { Pathname } from '../../utils/Pathname';

import s from './Contact.module.scss';

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className={s.contact}>
        <div className={s.contact__header}>
          <div className={`${s.contact__pathname} my-8`}>
            {t('homeURL')} /&nbsp;
            <span className="capitalize">{Pathname()}</span>
          </div>
          <div className={s.contact__content}>
            <h2 className={s.contact__title}>{t('contact.header')}</h2>
            <div className={s.contact__breakLine} />
            <p className={s.contact__description}>{t('contact.firstText')}</p>
            <p className={s.contact__description}>{t('contact.secondText')}</p>
          </div>
        </div>
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
