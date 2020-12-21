import React, { useState } from 'react';
import Button from './ComponenteBoton';

const Contador = (props) => {
  const {userName} = props;
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Hola: {userName}</p>
      <p1>Tu clickeaste {contador} veces</p1>
      <Button onClick={() => setContador(contador + 1)} />
    </div>
  );
};

export default Contador;
