import React, { useState } from 'react';
import './style.css';
import ComponenteBoton from '../componenteBoton/ComponenteBoton'

const ContadorBoton = (props) => {
    const { user } = props;
    const [contador, setContador] = useState(0);
    return (
      <div className="reactbox">
        <h2>
          Hola
          {' '}
          {user}
        </h2>
        Contador:
        <input type="text" className="text" value={contador} placeholder="asd" />
        <ComponenteBoton onClick={() => setContador(contador + 1)} />
      </div>
    );
  };
  
  export default ContadorBoton;
