import React, { useState } from 'react';
// import ContadorRick from '../components/ContadorRick';
import ComponenteBoton from '../components/componenteBoton/ComponenteBoton';
import ComponentSubscribe from '../components/ComponentSubscribe';

const PlaygroundRicardo = () => {
  const [producto, setProducto] = useState('');
  const [products, setProducts] = useState([]);
  const onClick = () => {
    setProducts([...products, producto]);
    setProducto('');
  };
  return (
    <div>
      <input type="text" value={producto} onChange={(evento) => setProducto(evento.target.value)} />
      <ComponenteBoton onClick={() => onClick()} />
      {
        products.map((product) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            {product}
          </div>
        ))
      }
    </div>
    // <ComponentSubscribe /> 
  );
};

export default PlaygroundRicardo;
