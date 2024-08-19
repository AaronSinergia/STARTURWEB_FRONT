import React from 'react';
import H2Box from '../components/H2Box/H2Box';
import { CreateWebPage } from '../components/CreateWebPage/CreateWebPage';

const StartProject = () => {
  return (
    <>
      <H2Box className="start_webpage_title" text="¿Empezamos?" />
      <CreateWebPage />
    </>
  );
};

export default StartProject;
