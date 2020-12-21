import React, { useState } from 'react';
import './style.css';

const ComponentTabs = (props) => {
    
    const [seleccion, setSeleccion] = useState('tab1');
    const { onClick } = props;
    return(
    <div>
        <button onClick={() => setSeleccion('tab1')} className ={seleccion == 'tab1' ? 'ComponentTabs'  : 'ComponentTabsOff'} > Boards </button>
        <button onClick={() => setSeleccion('tab2')} className ={seleccion == 'tab2' ? 'ComponentTabs'  : 'ComponentTabsOff'} > Studio </button>
    </div>
)};

export default ComponentTabs;