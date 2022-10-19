import React from 'react';
import './button.css';

function Button({ children, className, onClick, disabled }) {
  return (
    <button
      type="button"
      className={`button ${className}_button`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
