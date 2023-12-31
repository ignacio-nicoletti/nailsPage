import {useState} from 'react';
import style from './contact.module.css';
import emailjs from '@emailjs/browser';
import ErrorSendEmail from '../errors/errorSendEmail/errorSendEmail';
import handler from '@/pages/api/hello';

const Contact = ({fecha, items,SetOnError}) => {
  const [nombre, setNombre] = useState ('');
  const [email, setEmail] = useState ('');
  const [cellphone, setCellphone] = useState (null);

  const handlerError = () => {
    SetOnError (true);
    setTimeout (() => {
      SetOnError (false);
    }, 2000);
  };

  let servicios = [];
  items.map (e => servicios.push (e.value));

  var templateParams = {
    user_name: nombre,
    turno: fecha,
    services: servicios,
    user_cellphone: cellphone,
    user_email: email,
  };

  const handleSubmit = e => {
    e.preventDefault ();

    if (
      templateParams.user_name !== '' &&
      templateParams.turno !== '' &&
      templateParams.services != [] &&
      templateParams.user_cellphone !== '' &&
      templateParams.user_email !== ''
    ) {
      emailjs
        .send (
          'service_24yf788',
          'template_h772ibm',
          templateParams,
          'lG-IY0qMT-QWXTTAt'
        )
        .then (
          function (response) {
            console.log ('SUCCESS!', response.status, response.text);
          },
          function (error) {
            console.log ('FAILED...', error);
          }
        );
    } else {
      handlerError ();
    }
  };

  return (
    <div className={style.containContact}>
      <p>Contacto</p>
      {/* <div> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          name="user_name"
          placeholder="Nombre y apellido "
          onChange={e => setNombre (e.target.value)}
        />
        <input
          type="email"
          value={email}
          name="user_email"
          placeholder="email"
          onChange={e => setEmail (e.target.value)}
        />
        <input
          type="number"
          value={cellphone}
          name="user_cellphone"
          placeholder="celular"
          onChange={e => setCellphone (e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {/* </div> */}
      <p className={style.info}>
        Completa los datos para que podamos

        {' '}
        contactarte y confirmar
        {' '}

        la asitencia*.
      </p>
    </div>
  );
};
export default Contact;
