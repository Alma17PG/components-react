import React, { useState } from 'react';

import Button from '../componenteBoton/ComponenteBoton';

import './style.css';

const ProgressBar = (props) => {
  const [percentage, setPercentage] = useState(0);

  return (
    <div className="root">
      <div className="progress-bar-back">
        <div className="progress-bar" style={{ width: `${percentage}%` }} />
      </div>
      <div className="progress-bar-percentage">
        {`${percentage}%`}
      </div>
      <Button onClick={() => setPercentage(percentage + 10)} />
    </div>
  );
};

export default ProgressBar;
