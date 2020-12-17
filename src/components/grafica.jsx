import React from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots} from 'react-sparklines';

export default function grafica() {
    return (
        <div>
            <Sparklines data={[4, 1, 5, 6, 8, 4]}  height={50} width ={120} margin={3}>
                    <SparklinesLine color="#FE805C" />
                    <SparklinesSpots style={{ fill: "#FE805C" }}/>
            </Sparklines>
        </div>
    )
}
