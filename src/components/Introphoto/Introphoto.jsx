import React from 'react';
import { Link } from 'react-router-dom';
import './Introphoto.scss';

const Introphoto = () => {
  return (
    <div className="photo_container">
      <Link to="/login">
        <img className="girl_photo" src="./assets/girl.png" alt="girl_photo" />
        <h3 className="textcontent">¿Comenzamos?</h3>
      </Link>
    </div>
  );
};

export default Introphoto;
