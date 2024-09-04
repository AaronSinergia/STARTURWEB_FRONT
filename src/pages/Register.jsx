import React, { useContext } from 'react';
import H2Box from '../components/H2Box/H2Box';
import LoginForm from '../components/LoginForm/LoginForm';
import Button from '../components/Button/Button';
import { registerUser } from '../function/handleFunctions';
import { context } from '../hooks/context/context';
import StartProject from './StartProject';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { state, dispatch } = useContext(context);
  const navigate = useNavigate();

  return (
    <>
      {state.isLogged ? (
        <StartProject />
      ) : (
        <>
          <H2Box className="login_title" text="Registro" />
          <LoginForm />
          <div className="login_btns">
            <Button
              onClick={() => {
                registerUser();
                dispatch({ type: 'SET_ITS_LOGGED', payload: true });
                navigate('/');
              }}
              className={'register_btn'}
              text={'REGISTRATE'}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Register;
