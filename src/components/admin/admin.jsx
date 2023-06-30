import styles from './admin.module.css';
import ServiceAdmin from './servicesAdmin/ServicesAdmin';
import TimesAdmin from './TimesAdmin/timesAdmin';

const Admin = () => {
  return (
    <div className={styles.contain}>
      <ServiceAdmin />

      <TimesAdmin />

    </div>
  );
};

export default Admin;
