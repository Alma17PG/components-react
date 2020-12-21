import React, { useState } from 'react';
import './style.css';

const ComponentTabs = (props) => {
    
    const { onClick } = props;
    return(
    <div>
        <button onClick={() => onClick()} className ="ComponentTabsOff" > Boards </button>
        <button onClick={() => onClick()} className ="ComponentTabs" > Studio </button>
    </div>
)};

export default ComponentTabs;