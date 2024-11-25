import React, { useState } from 'react';
import './Button.scss';

const Button = ({
  type = 'button',
  onClick,
  className,
  text,
  title,
  isLoading: propIsLoading,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e) => {
    if (propIsLoading !== undefined) {
      onClick?.(e);
      return;
    }

    setIsLoading(true);
    try {
      await onClick?.(e);
    } catch (error) {
      console.error('Error en el clic del botón:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      title={title}
      type={type}
      onClick={handleClick}
      className={`${className} ${isLoading || propIsLoading ? 'loading' : ''}`}
      disabled={isLoading || propIsLoading}
    >
      {isLoading || propIsLoading ? (
        <img
          className="loading_logo"
          src="/assets/loading_logo.gif"
          alt="loading_logo"
        />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
