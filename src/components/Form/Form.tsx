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
import { useTranslation } from 'react-i18next';

function Form() {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, t('invalid.min3Characters'))
        .required(t('invalid.required')),
      email: Yup.string()
        .email(t('invalid.email'))
        .required(t('invalid.required')),
      phone: Yup.string()
        .matches(/^((\+[4]{1}[8]{1})([0-9]{9}))$/, t('invalid.phoneNumber'))
        .required(t('invalid.required')),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <div className={`${s.form__radioGroup} my-6 border-b-2 border-t-2`}>
          <h4 className={`${s.radioGroup__header} mt-6`}>
            {t('contact.topic')}:
          </h4>
          <div className="flex justify-between my-6 lg:flex-col">
            <div className="lg:py-2">
              <RadioButton
                checked={true}
                label={t('contact.reservation')}
                name="radio"
              />
            </div>
            <div className="lg:py-2">
              <RadioButton label={t('contact.party')} name="radio" />
            </div>
            <div className="lg:py-2">
              <RadioButton label={t('contact.catering')} name="radio" />
            </div>
            <div className="lg:py-2">
              <RadioButton label={t('contact.onlineOrder')} name="radio" />
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:flex-col">
          <div className={s.form__datepicker}>
            <label htmlFor="" className={s.datepicker__label}>
              {t('contact.date')}:&nbsp;
              <span className="text-blue-400">*</span>
            </label>
            <DatePick />
          </div>
          <div className={s.form__timepicker}>
            <label htmlFor="" className={s.timepicker__label}>
              {t('contact.time')}:&nbsp;
              <span className="text-blue-400">*</span>
            </label>
            <TimePick />
          </div>
          <div className={s.form__counterpicker}>
            <label htmlFor="" className={s.counterpicker__label}>
              {t('contact.people')}:&nbsp;
              <span className="text-blue-400">*</span>
            </label>
            <CounterPick />
          </div>
        </div>
        <Input
          id="firstname"
          name="firstname"
          type="text"
          label={t('contact.firstName')}
          placeholder={t('contact.firstNamePlaceholder')}
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
        <div className="flex justify-between lg:flex-col">
          <div>
            <Input
              id="email"
              name="email"
              type="email"
              label={t('contact.email')}
              placeholder={t('contact.emailPlaceholder')}
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
              label={t('contact.phone')}
              placeholder={t('contact.phonePlaceholder')}
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
            {t('contact.description')}&nbsp;
            <a className={s.form__link} href="/privacy_police">
              {t('policy')}
            </a>
            .
          </p>
        </div>
        <button className={s.form__btn} type="submit">
          {t('contact.btn')}
        </button>
      </form>
    </div>
  );
}

export default Form;
