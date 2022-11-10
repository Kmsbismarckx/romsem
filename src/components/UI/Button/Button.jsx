import React from 'react';
import './button.css';

function Button({ children, className, onClick, style, disabled }) {
  return (
    <button
      type="button"
      className={`button ${className}_button`}
      disabled={disabled || null}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
