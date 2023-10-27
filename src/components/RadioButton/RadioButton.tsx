import { RadioButtonProps } from '../../types/RadioButtonProps';
import s from './RadioButton.module.scss';

function RadioButton(props: RadioButtonProps) {
  return (
    <div className={s.radioButton}>
      <input type="radio" name={props.name} className={s.radioButton__radio} />
      <label htmlFor={props.name} className={s.radioButton__label}>
        {props.label}
      </label>
    </div>
  );
}

export default RadioButton;
