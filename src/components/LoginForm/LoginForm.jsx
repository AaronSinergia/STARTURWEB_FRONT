import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <form>
      <label>USUARIO</label>
      <input type="text" id="username" name="user" required />
      <label>CONTRASEÑA</label>
      <input type="password" id="password" name="password" required />
    </form>
  );
};

export default LoginForm;
