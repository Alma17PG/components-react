import React, { useState } from 'react';
import ComponenteBoton from '../componenteBoton/ComponenteBoton';

const ListaCompras = () => {
  const [producto, setProducto] = useState('');
  const [productos, setProductos] = useState([]);
  const onClick = () => {
    setProductos([...productos, producto]);
    setProducto('');
  };
  return (
    <div>
      <input type="text" value={producto} onChange={(evento) => setProducto(evento.target.value)} />
      <ComponenteBoton onClick={() => onClick()} />
      {
        productos.map((producto) => (
          <div>
            {producto}
          </div>
        ))
      }
    </div>
  );
};

export default ListaCompras;