import React from 'react';
import CreateHeader from '../components/CreateHeader/CreateHeader';
import CreateBody from '../components/CreateBody/CreateBody';
import CreateFooter from '../components/CreateFooter/CreateFooter';
import UndoSaveBtns from '../components/UndoSaveBtns/UndoSaveBtns';

const StartProject = () => {
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
