import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import s from './DatePick.module.scss';

function DatePick() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className={s.datepicker}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}

export default DatePick;
