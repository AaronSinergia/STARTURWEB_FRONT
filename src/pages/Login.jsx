import React from 'react';
import H2Box from '../components/H2Box/H2Box';
import LoginForm from '../components/LoginForm/LoginForm';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <H2Box className="login_title" text="Iniciar Sesión" />
      <LoginForm />
      <H2Box
        className={'register_advertisment'}
        text={'Si no tienes cuenta -->'}
      />
      <Link to="/register">
        <Button className={'register_btn'} text={'REGISTRATE'} />
      </Link>
    </>
  );
};

export default Login;
