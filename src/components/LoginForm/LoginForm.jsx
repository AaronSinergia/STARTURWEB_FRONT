import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import TourGuide from '../HelpMessage/TourGuide';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <form>
      <TourGuide />
      <label>USUARIO</label>
      <input type="text" id="user" className="clickable" name="user" />
      <label>CONTRASEÑA</label>
      <input
        type="password"
        id="password"
        className="clickable"
        name="password"
      />
      <div className="login_btns">
        <Button className={'enter_btn'} text={'ENTRAR'} />
        <Link to="/register">
          <Button className={'register_btn'} text={'REGISTRATE'} />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
