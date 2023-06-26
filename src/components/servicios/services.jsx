import {DataServices} from '@/Db/database';
import {useEffect, useState} from 'react';
import styles from './services.module.css';

const Services = () => {
  const [items, setItems] = useState ([]);
  const [total, setTotal] = useState ([]);

  const handleCheckboxChange = (value, price) => {
    const item = {value, price};

    if (isSelected (value)) {
      setItems (items.filter (item => item.value !== value));
    } else {
      setItems ([...items, item]);
    }
  };

  const isSelected = value => {
    return items.some (item => item.value === value);
  };

  let suma = 0;
  useEffect (
    () => {
      items.forEach (function (item) {
        suma += item.price;
      });
      setTotal (suma);
    },
    [items]
  );

  return (
    <div className={styles.servicesAndTotal}>

      <div className={styles.servicesContain}>
        <h2>Servicios</h2>
        {DataServices.map (item => (
          <div key={item.value} className={styles.serviceDetail}>
            <div className={styles.containercheck}>

              <label>
                {item.label}
                <input
                  type="checkbox"
                  value={item.value}
                  checked={isSelected (item.value)}
                  onChange={() => handleCheckboxChange (item.value, item.price)}
                />
                <span class={styles.checkmark} />
              </label>
            </div>

            <div className={styles.servicePrice}>
              <p>${item.price}</p>
            </div>
          </div>
        ))}

      </div>

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
        {total > 0
          ? 
              <button className={styles.TicketButton} onClick={""}>Reservar turno</button>
           
          : ''}
      </div>

    </div>
  );
};

export default Services;
