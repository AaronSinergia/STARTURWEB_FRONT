import React, { useReducer } from 'react';
import { context } from './context/context';

const initialState = {
  itsOn: false,
  itsFolded: false,
  setHeader: 'star(t)UrWeb',
  selectedProjectName: null,
  selectedHeader: null,
  selectedBody: null,
  selectedFooter: null,
  previousState: null,
  fileUploaded: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITSON':
      return { ...state, itsOn: action.payload };
    case 'SET_ITSFOLDED':
      return { ...state, itsFolded: action.payload };
    case 'SET_HEADER':
      return { ...state, setHeader: action.payload };
    case 'SET_PROJECTNAME':
      return { ...state, selectedProjectName: action.payload };

    case 'SET_SELECTED_HEADER':
      return {
        ...state,
        previousState: { ...state },
        selectedHeader: action.payload,
      };

    case 'SET_SELECTED_BODY':
      return {
        ...state,
        previousState: { ...state },
        selectedBody: action.payload,
      };

    case 'SET_IMG_UPLOADED':
      return {
        ...state,
        previousState: { ...state },
        fileUploaded: action.payload,
      };

    case 'SET_SELECTED_FOOTER':
      return {
        ...state,
        previousState: { ...state },
        selectedFooter: action.payload,
      };

    case 'UNDO_LAST_ACTION':
      return state.previousState ? state.previousState : state;
    default:
      return state;

    case 'RESET':
      return initialState;
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
