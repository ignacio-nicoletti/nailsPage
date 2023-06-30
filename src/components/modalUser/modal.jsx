import {useState} from 'react';
import styles from './modal.module.css';
import {
  loginUser,
  registrarUsuario,
} from '@/Db/Controllers/users/firebaseControllerUsers';


const Modal = ({onClose, onSubmit, setSession,session}) => {
  const [isRegistrando, setIsRegistrando] = useState (false);

  const submitHandler = e => {
    e.preventDefault ();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = 'admin';

    if (isRegistrando) {
      // registrar
      registrarUsuario (email, password, rol).then (data =>
        console.log (data.rol)
      );
    } else {
      // login
      if (email !== '' && password != '') {
        loginUser (email, password).then (data => setSession (data.rol));
      }
    }
    onSubmit (false);
  };


 


  return (<>
    {session=="user"?(
      <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose} />
        <h3>Iniciar sesion</h3>
        <form onSubmit={submitHandler}>
          <label>Email:</label>
          <input type="email" id="email" />
          <label>Password:</label>
          <input type="password" id="password" />
          <input
            type="submit"
            value={isRegistrando ? 'Registrar' : 'Iniciar sesión'}
            />
        </form>
      </div>
    </div>
  ):<div className={styles.modal}>
  <div className={styles.modalContent}>
    <span className={styles.close} onClick={onClose} />
    <h3>Cerrar sesion</h3>
    <form onSubmit={submitHandler}>
    
      <input
        type="submit"
        value={"Cerrar session"}
        />
    </form>
  </div>
</div>}
  </>
  );
};

export default Modal;
