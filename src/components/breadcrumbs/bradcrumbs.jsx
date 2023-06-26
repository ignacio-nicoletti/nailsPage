import styles from './breadcrumbs.module.css';

const Breadcrumbs = () => {
  return (
    <div className={styles.header}>
      <div className={styles.breadcrumb}>
        <a
          className={styles.breadcrumb__step && styles.breadcrumb__step}
          href="#"
        >
          Servicios
        </a>
        <a class={styles.breadcrumb__step} href="#">
          Horarios
        </a>
        <a class={styles.breadcrumb__step} href="#">
          Contacto
        </a>
        <a class={styles.breadcrumb__step} href="#">
          Linux
        </a>
      </div>
    </div>
  );
};
export default Breadcrumbs;
