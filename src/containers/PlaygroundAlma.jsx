import React from 'react';

import ProgressBar from '../components/ProgressBar';

const PlaygroundAlma = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div ><ProgressBar percentage={75} /></div>
  </div>
);

export default PlaygroundAlma;
