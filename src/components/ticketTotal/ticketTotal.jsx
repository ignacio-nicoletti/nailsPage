import {useEffect, useState} from 'react';
import styles from './ticketTotal.module.css';
const TicketTotal = ({items, setBreadcrumbs, breadcrumbs}) => {
  const [total, setTotal] = useState ([]);

  let suma = 0;
  useEffect (
    () => {
      items.forEach (function (item) {
        suma += Number (item.price);
      });
      setTotal (suma);
    },
    [items]
  );

  return (
    <div className={styles.totalContain}>
      <div className={styles.ticket}>
        <p>Ticket de compra</p>
        {items.map ((e, index) => (
          <div key={index} className={styles.detailTicket}>
            <p>{e.value}</p>
            <p>${e.price}</p>
          </div>
        ))}

        <div className={styles.TicketTotal}>
          <p>
            Total:
          </p>
          <p>
            ${total}
          </p>
        </div>
      </div>
      {total > 0 && breadcrumbs === 'servicios'
        ? <button
            className={styles.TicketButton}
            onClick={() => setBreadcrumbs ('horarios')}
          >
            Reservar turno
          </button>
        : ''}
    </div>
  );
};

export default TicketTotal;
