import { useFormik } from 'formik';
import * as Yup from 'yup';

// styles
import s from './Form.module.scss';

// components
import RadioButton from '../RadioButton/RadioButton';
import Input from '../Input/Input';
import DatePick from '../Picker/DatePick';
import TimePick from '../Picker/TimePick';
import CounterPick from '../Picker/CounterPick';

function Form() {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, 'To pole wymaga przynajmniej 3 znaków')
        .required('Wymagane pole'),
      email: Yup.string()
        .email('Nieprawidłowy adres e-mail')
        .required('Wymagane pole'),
      phone: Yup.string().required('Wymagane pole'),
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
            <RadioButton checked={true} label="rezerwacja" name="radio" />
            <RadioButton
              checked={false}
              label="impreza okolicznościowa"
              name="radio"
            />
            <RadioButton checked={false} label="catering" name="radio" />
            <RadioButton
              checked={false}
              label="zamówienie online"
              name="radio"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className={s.form__datepicker}>
              <label htmlFor="" className={s.datepicker__label}>
                Data:&nbsp;
                <span className="text-blue-400">*</span>
              </label>
              <DatePick />
            </div>
            <div className={s.form__timepicker}>
              <label htmlFor="" className={s.timepicker__label}>
                Godzina:&nbsp;
                <span className="text-blue-400">*</span>
              </label>
              <TimePick />
            </div>
            <div className={s.form__counterpicker}>
              <label htmlFor="" className={s.counterpicker__label}>
                Ilość osób:&nbsp;
                <span className="text-blue-400">*</span>
              </label>
              <CounterPick />
            </div>
          </div>
          <Input
            id="firstname"
            name="firstname"
            type="text"
            label="Imię:"
            placeholder="Wpisz imię"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
            className={`${s.form__firstname} ${
              formik.touched.firstname && formik.errors.firstname
                ? 'border-red-500'
                : ''
            }`}
            required={true}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="mb-4 text-sm font-bold text-red-500">
              {formik.errors.firstname}
            </div>
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
              className={`${s.form__email} ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : ''
              }`}
              required={true}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="mb-4 text-sm font-bold text-red-500">
                {formik.errors.email}
              </div>
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
              className={`${s.form__phone} ${
                formik.touched.phone && formik.errors.phone
                  ? 'border-red-500'
                  : ''
              }`}
              required={true}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="mb-4 text-sm font-bold text-red-500">
                {formik.errors.phone}
              </div>
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
