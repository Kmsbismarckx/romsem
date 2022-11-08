import React from 'react';
import './Increment.css';

function Increment({ onClick }) {
  return <div className="increment" onClick={onClick} />;
}

export default Increment;
