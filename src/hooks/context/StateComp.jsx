import React, { useReducer } from 'react';
import { context } from './context';

const initialState = {
  itsOn: false,
  setHeader: 'star(t)UrWeb',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITSON':
      return { ...state, itsOn: action.payload };
    case 'SET_HEADER':
      return { ...state, setHeader: action.payload };
    default:
      return state;
  }
};

const StateComp = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default StateComp;
