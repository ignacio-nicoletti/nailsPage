import {
  registerProduct,
} from '@/Db/Controllers/services/firebaseControllerServices';
import styles from './servicesAdmin.module.css';

const ServiceAdmin = () => {
  let categorias = ['Remover', 'Manos', 'Pies'];

  const submitHandlerService = e => {
    e.preventDefault ();

    const nameService = e.target.elements.NameServices.value;
    const price = e.target.elements.price.value;
    let category = e.target.elements.categoria.value;
    registerProduct (nameService, price, category);
  };

  return (
    <div className={styles.services}>
      <form onSubmit={submitHandlerService} className={styles.forms}>
        <h2>Crear servicio</h2>
        <label>Nombre del servicio</label>
        <input type="text" id="NameServices" />
        <label>Precio:</label>
        <input type="number" id="price" />
        <label>Selecciona la categoria</label>
        <select name="" id="categoria">
          <option disabled={true}>Elige la categoria </option>
          {categorias.map ((e,index)=> <option key={index}>{e}</option>)}
        </select>
        <input type="submit" value={'Crear servicio'} />
      </form>
    </div>
  );
};
export default ServiceAdmin;
