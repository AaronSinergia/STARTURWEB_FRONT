import React from 'react';
import './LoginForm.scss';
import Button from '../Button/Button';

const LoginForm = () => {
  return (
    <form>
      <label>USUARIO</label>
      <input type="text" id="user" name="user" />
      <label>CONTRASEÑA</label>
      <input type="password" id="password" name="password" />
      <Button className={'enter_btn'} text={'ENTRAR'} />
    </form>
  );
};

export default LoginForm;
