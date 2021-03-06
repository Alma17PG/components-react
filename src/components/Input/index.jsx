import React from 'react';
import './index.css';

const InputRick = (props) => {
  const {onClick} = props;
  return (
    <div className="reactbox">
      <form className="react">
        <input type="text" className="text" placeholder="Type your email" />
        <input type="submit" className="btn" value="Subscribe" />
      </form>
    </div>
  );
};

export default InputRick;
