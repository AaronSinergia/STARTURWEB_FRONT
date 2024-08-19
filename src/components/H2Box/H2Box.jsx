import React from 'react';
import './H2Box.scss';

const H2Box = ({ className, text }) => {
  return (
    <>
      <h2 className={className}>{text}</h2>
    </>
  );
};

export default H2Box;
