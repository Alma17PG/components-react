import React from 'react';
import './style.css';

const Calendario = ({ day }) => (
    <div>
        <button className ="CuadroCalendario" > {day} </button>
    </div>
);

export default Calendario;
