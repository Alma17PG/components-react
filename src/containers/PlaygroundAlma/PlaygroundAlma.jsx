import React from 'react';

import Button from '../../components/componenteBoton/ComponenteBoton';

const PlaygroundAlma = ({ user, setUser }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>{user}</div>
      <Button onClick={() => setUser('Nuevo usuario')} />
    </div>
  )
};

export default PlaygroundAlma;
