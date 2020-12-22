import React, { useState } from 'react'
import Boton from '../componenteBoton/ComponenteBoton'

const map = () => {
    const [word, setWord] = useState('');
    const [words, setWords] = useState(["hola", "mundo", "adios"]);

    return (
        <div>
            <input type="text" value={word} onChange={(evento) => setWord(evento.target.value)}></input>
                {words.map(word => {
                    return (
                        <div>
                            {word}    
                        </div>
                    )
                })}
            <Boton onClick={() => setWords([...words, word])}></Boton>
        </div>
    );
}

export default map;
