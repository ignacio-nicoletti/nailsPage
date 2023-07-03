import styles from './breadcrumbs.module.css';
import userShield from '../../assets/user-shield.png';
import usercheck from '../../assets/user-check.png';
import Image from 'next/image';
import Modal from '../modalUser/modal';
import {useState} from 'react';

const Breadcrumbs = ({breadcrumbs, setBreadcrumbs, setSession, session}) => {
  const [isModalOpen, setIsModalOpen] = useState (false);

  const handleModalOpen = () => {
    setIsModalOpen (!isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen (false);
  };

  return (
    <div className={styles.containHeader}>

      <div className={styles.breadcrumb}>
        <div
          className={styles.servicio}
          onClick={() => setBreadcrumbs ('servicios')}
        >
          <p>
            Servicios
          </p>
        </div>
        <div className={styles.line}>
          <p>
            {' ======> '}
          </p>
        </div>

        <div
          className={styles.horarios}
          onClick={() => setBreadcrumbs ('horarios')}
        >
          <p>
            Horarios {' '}
          </p>
        </div>
        <div className={styles.line}>
          <p>
            {' ======> '}
          </p>
        </div>
        <div
          className={styles.contacto}
          onClick={() => setBreadcrumbs ('contacto')}
        >
          <p>
            Contacto
          </p>

        </div>
      </div>
      <div className={styles.userContain}>
        {' '}
        <Image
          src={session === 'user' ? userShield : usercheck}
          width={30}
          height={30}
          alt="logo wsp"
          className={styles.user}
          onClick={handleModalOpen}
        />

        {isModalOpen &&
          <Modal
            onClose={handleModalClose}
            onSubmit={setIsModalOpen}
            setSession={setSession}
            session={session}
          />}

      </div>

    </div>
  );
};
export default Breadcrumbs;
