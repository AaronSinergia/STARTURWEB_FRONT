import React, { useReducer } from 'react';
import { context } from './context';
// import { helpSteps } from '../../utils/helpMessages/helpSteps';

const initialState = {
  itsOn: false,
  setHeader: 'star(t)UrWeb',
  currentStep: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITSON':
      return { ...state, itsOn: action.payload };
    case 'SET_HEADER':
      return { ...state, setHeader: action.payload };
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload };
    default:
      return state;
  }
};

// const nextStep = () => {
//   if (currentStep < steps.length - 1) {
//     setCurrentStep(currentStep + 1);
//   }
// };

// const prevStep = () => {
//   if (currentStep > 0) {
//     setCurrentStep(currentStep - 1);
//   }
// };

// const { message, target } = helpSteps[currentStep];

const StateComp = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider
      value={{
        state,
        dispatch,
        // nextStep,
        // prevStep,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default StateComp;
