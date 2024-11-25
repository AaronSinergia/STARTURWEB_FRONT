import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import H2Box from '../components/H2Box/H2Box';
import LoginForm from '../components/LoginForm/LoginForm';
import Button from '../components/Button/Button';
import { loginUser } from '../function/handleFunctions';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginUser(navigate);
  };

  return (
    <>
      <H2Box className="login_title" text="Iniciar Sesión" />
      <LoginForm />
      <div className="login_btns">
        <Button onClick={handleLogin} className="enter_btn" text="ENTRAR" />
        <Link to="/register">
          <Button className="register_btn" text="REGISTRATE" />
        </Link>
      </div>
    </>
  );
};

export default Login;
