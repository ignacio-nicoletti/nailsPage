import styles from './horarios.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useEffect, useState} from 'react';

import { getTimes } from '@/Db/Controllers/times/firebaseControllerTimes';

const Horarios = ({setFecha, setBreadcrumbs}) => {
  const [value, onChange] = useState (new Date ());
  const [horario, setHorario] = useState ('');
  const [timeList, setTimeList] = useState ([]);

  useEffect (
    () => {
      getTimes().then(data=>setTimeList(data))

      setFecha (value + ' ' +" a las "+ horario);
    },
    [horario, value]
  );
  return (
    <div className={styles.contain}>
      <Calendar onChange={onChange} value={value} className={styles.calendar} />

      <select
        name=""
        className={styles.select}
        onClick={() => setHorario (event.target.value)}
      >
        <option value={''}>Elige el horario</option>
        {timeList.map (e => <option value={e.times}>{e.times}</option>)}

      </select>

      {horario !== ''
        ? <button
            onClick={()=>setBreadcrumbs ('contacto')}
            className={styles.button}
          >
            Confirmar Datos
          </button>
        : ''}

    </div>
  );
};

export default Horarios;
