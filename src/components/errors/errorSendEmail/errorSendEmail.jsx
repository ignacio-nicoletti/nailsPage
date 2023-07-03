import styles from "./errorSendEmail.module.css"

const ErrorSendEmail = () => {
  return (
    <div className={styles.contain}>
     
        <span className={styles.close} onClick={""} />
        <h3>Debes completar todos los pasos Gracias!</h3>
        
      </div>
    
  );
};

export default ErrorSendEmail
