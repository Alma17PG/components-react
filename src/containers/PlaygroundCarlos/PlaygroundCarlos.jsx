import React from 'react';
import Button from '../../components/componenteBoton/ComponenteBoton';

const PlaygroundCarlos = ({ dia, setDia }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>{dia}</div>
      <Button onClick={() => setDia('Martes')} />
    </div>
  </div>
);

export default PlaygroundCarlos;
