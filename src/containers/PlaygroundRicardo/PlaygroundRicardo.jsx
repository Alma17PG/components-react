import React from 'react';
// import ContadorRick from '../components/ContadorRick';
import Button from '../../components/componenteBoton/ComponenteBoton';

const PlaygroundRicardo = ({ ticket, setTicket }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>Mensaje: {ticket}</div>
      <Button onClick={() => setTicket('Si se pudo')} />
    </div>
  );

export default PlaygroundRicardo;
