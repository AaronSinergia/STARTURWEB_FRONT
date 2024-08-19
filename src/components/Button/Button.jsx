import React from 'react';
import './Button.scss';

const Button = ({ onClick, className, style, text }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
