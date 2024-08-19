import React from 'react';
import { Link } from 'react-router-dom';
import './Introphoto.scss';

const Introphoto = () => {
  return (
    <div
      className="photo_container"
      onClick={() => {
        alert(
          'Te recomendamos usar una pantalla grande para una mejor experiencia.'
        );
      }}
    >
      <Link to="/start_project">
        <img className="girl_photo" src="./assets/girl.png" alt="girl_photo" />
        <h3 className="textcontent">¿Comenzamos?</h3>
      </Link>
    </div>
  );
};

export default Introphoto;
