import React from 'react';

import './style.css';

const ProgressBar = () => {
  const percentage = 25;
  return (
    <div className="root">
      <div className="progress-bar-back">
        <div className="progress-bar" style={{ width: `${percentage}%` }} />
      </div>
      <div className="progress-bar-percentage">
        {`${percentage}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
