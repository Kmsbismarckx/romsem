import React from 'react';

function Input(props, className) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input className={`input ${className}`} {...props} />;
}

export default Input;
