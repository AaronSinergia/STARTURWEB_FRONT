import React from 'react';
import H2Box from '../components/H2Box/H2Box';
import LoginForm from '../components/LoginForm/LoginForm';
import Button from '../components/Button/Button';
import { registerUser } from '../function/handleFunctions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async () => {
    await registerUser(navigate);
  };

  return (
    <>
      <H2Box className="login_title" text="Registro" />
      <LoginForm />
      <div className="login_btns">
        <Button
          onClick={handleRegister}
          className={'register_btn'}
          text={'REGISTRATE'}
        />
      </div>
    </>
  );
};

export default Register;
