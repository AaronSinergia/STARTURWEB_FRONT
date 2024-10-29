import React from 'react';
import './Button.scss';

const Button = ({ type, onClick, className, text, title }) => {
  return (
    <button title={title} type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
