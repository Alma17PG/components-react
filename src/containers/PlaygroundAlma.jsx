import React from 'react';

import Calendario from '../components/Calendario';

const days = [1, 2, 3, 4, 5, 6, 7, 8];

const PlaygroundAlma = () => {
  days.push(9)
  console.log(days)
  console.log([...days, 10])
  return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    {
      days.filter(day => day % 2 === 0).map(day => {
        return (
          <Calendario day={day} />
        )
      })
    }
  </div>
)};

export default PlaygroundAlma;
