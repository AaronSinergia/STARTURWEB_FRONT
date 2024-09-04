import React from 'react';
import H2Box from '../components/H2Box/H2Box';
import LoginForm from '../components/LoginForm/LoginForm';
import { loginUser } from '../function/handleFunctions';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <H2Box className="login_title" text="Iniciar Sesión" />
      <LoginForm />
      <div className="login_btns">
        <Button onClick={loginUser} className={'enter_btn'} text={'ENTRAR'} />
        <Link to="/register">
          <Button className={'register_btn'} text={'REGISTRATE'} />
        </Link>
      </div>
    </>
  );
};

export default Login;
