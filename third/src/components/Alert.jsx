import React from 'react';
import { Alert } from 'react-bootstrap';

const Alerta = ({ color, msg }) => {
  return (
    <Alert key={color} variant={color} className='mt-3'>
      {msg}
    </Alert>
  );
}

export default Alerta;
