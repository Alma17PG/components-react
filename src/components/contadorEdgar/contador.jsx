import React, { useState } from 'react'
import './style.css';
import Boton from "../componenteBoton/ComponenteBoton"

const contador = (props) => {
    const [saludos, setSaludos] = useState(0);
    return (
        <div>
            <div className="display-linebreak">
                {"Hola mundo\n\n\n Veces que " + props.user + " ha saludado al mundo: "
                    + saludos}
            </div>
            <Boton onClick={() => setSaludos(saludos + 1)}></Boton>
        </div>
    )
}

export default contador
