import { useFormik } from 'formik';
import * as Yup from 'yup';

// styles
import s from './Form.module.scss';

// components
import RadioButton from '../RadioButton/RadioButton';
import Input from '../Input/Input';

function Form() {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <div className={`${s.form__radioGroup} my-6 border-b-2 border-t-2`}>
          <h4 className={`${s.radioGroup__header} mt-6`}>Temat kontaktu:</h4>
          <div className="flex my-6">
            <RadioButton label="rezerwacja" name="radio" />
            <RadioButton label="impreza okolicznościowa" name="radio" />
            <RadioButton label="catering" name="radio" />
            <RadioButton label="zamówienie online" name="radio" />
          </div>
        </div>
        <div>
          <Input
            id="firstname"
            name="firstname"
            type="text"
            label="Imię:"
            placeholder="Wpisz imię"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
            className={s.form__firstname}
            required={true}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="mb-6">{formik.errors.firstname}</div>
          ) : null}
        </div>
        <div className="flex justify-between">
          <div>
            <Input
              id="email"
              name="email"
              type="email"
              label="E-mail:"
              placeholder="Wpisz adres e-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={s.form__email}
              required={true}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="mb-6">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <Input
              id="phone"
              name="phone"
              type="phone"
              label="Telefon:"
              placeholder="Podaj numer telefonu"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={s.form__phone}
              required={true}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="mb-6">{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>
        <div className={s.form__accept}>
          <input
            className={s.form__checkbox}
            type="checkbox"
            name="privacy_police"
          />
          <p>
            Wyrażam zgodę na przetwarzanie danych moich osobowych przez firmę A
            La Francaise, zgodnie z ustawą o ochronie danych osobowych. Więcej
            w&nbsp;
            <a className={s.form__link} href="/privacy_police">
              politykę prywatności
            </a>
            .
          </p>
        </div>
        <button className={s.form__btn} type="submit">
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default Form;
