import {registerTime} from '@/Db/Controllers/times/firebaseControllerTimes';
import styles from './timesAdmin.module.css';

const TimesAdmin = () => {
  const submitHandlerTimes = e => {
    e.preventDefault ();

    const horario = e.target.elements.Time.value;

    registerTime (horario);
  };

  return (
    <div className={styles.horarios}>
      <form onSubmit={submitHandlerTimes} className={styles.forms}>
        <label>Hora disponible</label>
        <input type="text" id="Time" placeholder={'ej. 12:00Hs Am/Pm'} />

        <input type="submit" value={'Crear Horario'} />
      </form>
    </div>
  );
};

export default TimesAdmin;
