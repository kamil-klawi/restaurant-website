import { useState } from 'react';
import s from './CounterPick.module.scss';

function CounterPick() {
  const [count, setCount] = useState<number>(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={s.counter}>
      <div
        className={`${s.counter__item} ${s.counter__btn}`}
        onClick={handleDecrement}
      >
        -
      </div>
      <div className={s.counter__item}>{count}</div>
      <div
        className={`${s.counter__item} ${s.counter__btn}`}
        onClick={handleIncrement}
      >
        +
      </div>
    </div>
  );
}

export default CounterPick;
