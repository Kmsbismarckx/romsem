import React from 'react';
import './button.css';

function Button({ children, className, onClick, style }) {
  return (
    <button type="button" className={`button ${className}_button`} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default Button;
