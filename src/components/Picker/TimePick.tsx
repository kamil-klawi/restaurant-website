import { useState } from 'react';
import TimePicker from 'react-time-picker';

import 'react-time-picker/dist/TimePicker.css';
import s from './TimePick.module.scss';

function TimePick() {
  const [value, setValue] = useState(new Date());

  return (
    <TimePicker
      className={s.timepicker}
      format="hh:mm"
      disableClock={true}
      onChange={setValue}
      value={value}
      required={true}
      hourPlaceholder="hh"
      minutePlaceholder="mm"
    />
  );
}

export default TimePick;
