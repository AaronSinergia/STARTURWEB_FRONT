import React, { useState, useEffect } from 'react';
import { regHelpSteps } from '../../utils/helpMessages/regHelpSteps';
import './TourGuide.scss';

const TourGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState({
    top: 200,
    left: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (currentStep === 0) {
      const inputElement = document.querySelector('#user');
      if (inputElement) {
        inputElement.focus();
        const handleInput = (e) => {
          if (e.target.value.length > 0) {
            setCurrentStep((prevStep) => {
              const nextStep = prevStep + 1;
              if (nextStep < regHelpSteps.length) {
                setPosition(regHelpSteps[nextStep]?.targetId || '');
              }
              return nextStep;
            });
          }
        };
        inputElement.addEventListener('input', handleInput);
        return () => {
          inputElement.removeEventListener('input', handleInput);
        };
      }
    }
  }, [currentStep]);

  return (
    <div>
      <Popup
        message={regHelpSteps[currentStep]?.message || ''}
        position={position}
      />
    </div>
  );
};

const Popup = ({ message, position }) => {
  return (
    <div
      className="popup"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <div className="popup-content">{message}</div>
    </div>
  );
};

export default TourGuide;
