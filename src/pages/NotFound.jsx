import React from 'react';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Link to="/">
      <img src="/assets/404_img.png" alt="404img" />
      <Button className="notfound_btn" text={'HOME'} />
    </Link>
  );
};

export default NotFound;
