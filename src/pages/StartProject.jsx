import React, { useContext, useEffect } from 'react';
import { context } from '../hooks/context/context';
import CreateHeader from '../components/CreateHeader/CreateHeader';
import CreateBody from '../components/CreateBody/CreateBody';
import CreateFooter from '../components/CreateFooter/CreateFooter';
import UndoSaveBtns from '../components/UndoSaveBtns/UndoSaveBtns';

const StartProject = () => {
  const { dispatch } = useContext(context);

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
  }, [dispatch]);

  return (
    <>
      <CreateHeader />
      <CreateBody />
      <CreateFooter />
      <UndoSaveBtns />
    </>
  );
};

export default StartProject;
