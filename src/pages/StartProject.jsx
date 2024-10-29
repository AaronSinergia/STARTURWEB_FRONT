import React, { useContext, useEffect } from 'react';
import { context } from '../hooks/context/context';
import CreateHeader from '../components/CreateHeader/CreateHeader';
import CreateBody from '../components/CreateBody/CreateBody';
import CreateFooter from '../components/CreateFooter/CreateFooter';
import UndoBTN from '../components/UndoBTN/UndoBTN';
import Button from '../components/Button/Button';
import { registerNewWebPage } from '../function/handleFunctions';

const StartProject = () => {
  const { state, dispatch } = useContext(context);

  useEffect(() => {
    const selectedProject = JSON.parse(localStorage.getItem('selectedProject'));

    if (selectedProject) {
      dispatch({
        type: 'SET_SELECTED_HEADER',
        payload: selectedProject.header,
      });
      dispatch({ type: 'SET_SELECTED_BODY', payload: selectedProject.body });
      dispatch({
        type: 'SET_SELECTED_FOOTER',
        payload: selectedProject.footer,
      });
    }

    const savedHeader = localStorage.getItem('selectedHeader');
    if (savedHeader) {
      dispatch({ type: 'SET_SELECTED_HEADER', payload: savedHeader });
    }

    const savedBody = localStorage.getItem('selectedBody');
    if (savedBody) {
      dispatch({ type: 'SET_SELECTED_BODY', payload: savedBody });
    }
  }, [dispatch]);

  return (
    <>
      <CreateHeader />
      <CreateBody />
      <CreateFooter />
      <UndoBTN />
      <Button
        className={'save_button'}
        onClick={() => registerNewWebPage(state)}
        text={'Guardar Selección'}
      />
    </>
  );
};

export default StartProject;
