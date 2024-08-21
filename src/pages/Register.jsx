import React from 'react';
import H2Box from '../components/H2Box/H2Box';
import LoginForm from '../components/LoginForm/LoginForm';

const Register = () => {
  return (
    <>
      <H2Box className="login_title" text="Registro" />
      <LoginForm />
    </>
  );
};

export default Register;
