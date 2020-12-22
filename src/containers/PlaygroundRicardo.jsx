import React, { useState } from 'react';
// import ContadorRick from '../components/ContadorRick';
import ComponenteBoton from '../components/componenteBoton/ComponenteBoton';

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
          <div>
            {product}
          </div>
        ))
      }
    </div>
  );
};

export default PlaygroundRicardo;
