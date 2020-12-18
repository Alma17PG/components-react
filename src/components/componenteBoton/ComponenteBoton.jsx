import React from 'react';
import './style.css';

const ComponenteBoton = (props) => {
    
    const { onClick } = props;
    return(
    <div>
        <button onClick={() => onClick()} className ="ComponenteBoton" > Hire me </button>
    </div>
)};

export default ComponenteBoton;
