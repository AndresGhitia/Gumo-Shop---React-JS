import React, { useState } from "react";
import './CheckoutForm.css';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = (event) => {
    event.preventDefault();

    if (name && phone && email) {
      const userData = {
        name,
        phone,
        email
      };

      onConfirm(userData);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="Container">
      <form onSubmit={handleConfirm} className='Form'>
        <label className='Label'>
          Nombre
          <input
            className='Input'
            type='text'
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className='Label'>
          Telefono
          <input
            className='Input'
            type='text'
            value={phone}
            onChange={({ target }) => setPhone(target.value)}                  
          />
        </label>
        <label className='Label'>
          Email
          <input
            className='Input'
            type='email'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div className='Label'>
          <button type='submit' className='OptionCard1'>Generar Orden</button>
        </div>
      </form>
      
      {showModal && (
        <div className="Modal">
          <div className="ModalContent">
            <p>Por favor, complete todos los campos</p>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
