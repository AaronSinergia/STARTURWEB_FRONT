import React from 'react';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Link to="/">
      <Button className="notfound_btn" text={'Recargar'} />
    </Link>
  );
};

export default NotFound;
