import React, { useContext } from 'react';
import { context } from '../../hooks/context/context';
import './CreateHeader.scss';

const CreateHeader = () => {
  const { state, dispatch } = useContext(context);

  const handleHeaderSelection = (header) => {
    dispatch({ type: 'SET_SELECTED_HEADER', payload: header });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch({ type: 'SET_PROJECTNAME', payload: value });
    localStorage.setItem('selectedProjectName', value);
  };
  const projectName = state.selectedProjectName;
  const projectNameClicked = localStorage.getItem('projectNameClicked');

  return (
    <>
      {!state.selectedHeader ? (
        <section className="header_section">
          <h3>1. Selecciona un estilo de encabezado</h3>
          <div
            className="header_div"
            onClick={() => {
              handleHeaderSelection('HeaderStyle1');
              localStorage.setItem('selectedHeader', state.selectedHeader);
            }}
          >
            <img src="/assets/icons/nav_icon.png" alt="title_logo_header" />
            <h3>{projectName ? projectName : 'Tu Título Web'}</h3>
          </div>
          <div
            className="header_div_two"
            onClick={() => {
              handleHeaderSelection('HeaderStyle2');
              localStorage.setItem('selectedHeader', state.selectedHeader);
            }}
          >
            <h3>{projectName ? projectName : 'Tu Título Web'}</h3>
            <img src="/assets/icons/nav_icon.png" alt="title_logo_header" />
          </div>
        </section>
      ) : (
        <section className="display_selected_header">
          {state.selectedHeader === 'HeaderStyle1' && (
            <>
              <div className="header_div">
                <img
                  src={'/assets/icons/nav_icon.png'}
                  alt="title_logo_header"
                />
                <input
                  type="text"
                  value={projectNameClicked}
                  placeholder="Tu Título Web"
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          {state.selectedHeader === 'HeaderStyle2' && (
            <>
              <div className="header_div_two">
                <input
                  type="text"
                  value={projectNameClicked}
                  placeholder="Tu Título Web"
                  onChange={handleInputChange}
                />
                <img
                  src={'/assets/icons/nav_icon.png'}
                  alt="title_logo_header"
                />
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
};

export default CreateHeader;
