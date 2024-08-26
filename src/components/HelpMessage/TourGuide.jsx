import React, { useState, useEffect } from 'react';
import { regHelpSteps } from '../../utils/helpMessages/regHelpSteps';
import './TourGuide.scss';

const TourGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState({
    top: 610,
    left: 20,
    width: 0,
    height: 0,
  });

  const updatePosition = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      const { top, left, width, height } =
        targetElement.getBoundingClientRect();
      setPosition({
        top: top + window.scrollY,
        left: left + width + 0,
        width,
        height,
      });
    }
  };

  useEffect(() => {
    const setupEventListeners = () => {
      const clickableElements = document.querySelectorAll('.clickable');
      clickableElements.forEach((element) => {
        element.addEventListener('click', (event) => {
          const elementId = event.target.id;
          console.log(elementId);
          updatePosition(elementId);
        });
      });
    };

    // Configura los manejadores de eventos al montar el componente
    setupEventListeners();

    // Limpia los manejadores de eventos al desmontar el componente
    return () => {
      const clickableElements = document.querySelectorAll('.clickable');
      clickableElements.forEach((element) => {
        element.removeEventListener('click', () => {});
      });
    };
  }, []);

  // Actualiza la posición del popup cuando cambia el paso actual
  useEffect(() => {
    const stepTargetId = regHelpSteps[currentStep]?.target.id;
    if (stepTargetId) {
      updatePosition(stepTargetId);
    }
  }, [currentStep]);

  // // Maneja el enfoque del input y cambia el paso actual
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
                updatePosition(regHelpSteps[nextStep]?.targetId || '');
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
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`,
        height: `${position.height}px`,
      }}
    >
      <div className="popup-content">{message}</div>
    </div>
  );
};

export default TourGuide;
