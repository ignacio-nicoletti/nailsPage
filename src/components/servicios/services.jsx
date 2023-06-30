import {
  getServices,
} from '@/Db/Controllers/services/firebaseControllerServices';

import {useEffect, useState} from 'react';
import Contact from '../contact/contact';

import Horarios from '../horarios/horarios';
import TicketTotal from '../ticketTotal/ticketTotal';
import styles from './services.module.css';

const Services = ({breadcrumbs, setBreadcrumbs}) => {
  const [items, setItems] = useState ([]);
  const [fecha, setFecha] = useState ('');
  const [categorias, setCategorias] = useState ([
    'Todo',
    'Remover',
    'Manos',
    'Pies',
  ]);
  const [dataList, setDataList] = useState ([]);
  const [filter, setFilter] = useState ('Todo');
  const [dataFilter, setDatafilter] = useState ([]);

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
  useEffect (
    () => {
      getServices ().then (data => setDataList (data));
      if (dataList) {
        filter !== 'Todo'
          ? setDatafilter (dataList.filter (e => e.category === filter))
          : setDatafilter (dataList);
      }
    },
    [filter, dataList]
  );
  return (
    <div className={styles.servicesAndTotal}>
      {breadcrumbs === 'servicios'
        ? <div className={styles.servicesContain}>
            <h2>Servicios</h2>
            <div className={styles.filter}>
              <select
                name=""
                id=""
                onChange={() => setFilter (event.target.value)}
              >
                {categorias.map ((e, i) => (
                  <option key={i} value={e}>{e}</option>
                ))}

              </select>
            </div>

            {dataFilter.map ((item, index) => (
              <div key={index} className={styles.serviceDetail}>
                <div className={styles.containercheck}>

                  <label>
                    {item.nameService}
                    <input
                      type="checkbox"
                      value={item.nameService}
                      checked={isSelected (item.nameService)}
                      onChange={() =>
                        handleCheckboxChange (item.nameService, item.price)}
                    />
                    <span className={styles.checkmark} />
                  </label>
                </div>

                <div key={index} className={styles.servicePrice}>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}

          </div>
        : breadcrumbs === 'horarios'
            ? <div className={styles.horario}>

                <Horarios setFecha={setFecha} setBreadcrumbs={setBreadcrumbs} />
              </div>
            : <Contact fecha={fecha} items={items} />}

      <TicketTotal
        items={items}
        setBreadcrumbs={setBreadcrumbs}
        breadcrumbs={breadcrumbs}
      />

    </div>
  );
};

export default Services;
