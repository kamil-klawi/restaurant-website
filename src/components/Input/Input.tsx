import { InputActions, InputProps } from '../../types/InputProps';
import s from './Input.module.scss';

function Input(props: InputProps & InputActions) {
  return (
    <div className={s.input}>
      <label htmlFor={props.name} className={s.input__label}>
        {props.label}&nbsp;
        <span className="text-blue-400">{props.required ? '*' : ''}</span>
      </label>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        className={props.className}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}

export default Input;
