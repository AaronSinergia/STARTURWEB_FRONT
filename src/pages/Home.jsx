import React, { useContext } from 'react';
import { context } from '../hooks/context/context';
import Introphoto from '../components/Introphoto/Introphoto';
import StartProject from './StartProject';

const Home = () => {
  const { state } = useContext(context);
  return <>{state.itsLogged ? <StartProject /> : <Introphoto />}</>;
};

export default Home;
