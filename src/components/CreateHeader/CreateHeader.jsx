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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch({ type: 'SET_SELECTED_IMG', payload: reader.result });
        localStorage.setItem('headerImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
    dispatch({ type: 'SET_IMG_UPLOADED', payload: true });
  };

  const projectName = state.selectedProjectName;

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
            <h3>Tu Título Web</h3>
          </div>
          <div
            className="header_div_two"
            onClick={() => {
              handleHeaderSelection('HeaderStyle2');
              localStorage.setItem('selectedHeader', state.selectedHeader);
            }}
          >
            <h3>Tu Título Web</h3>
            <img src="/assets/icons/nav_icon.png" alt="title_logo_header" />
          </div>
        </section>
      ) : (
        <section className="display_selected_header">
          {state.selectedHeader === 'HeaderStyle1' && (
            <>
              <div className="header_div">
                <img
                  src={state.selectedImage || '/assets/icons/nav_icon.png'}
                  alt="title_logo_header"
                />
                {!state.fileUploaded && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                )}
                <input
                  type="text"
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
                  placeholder={projectName ? projectName : 'Tu Título Web'}
                  onChange={handleInputChange}
                />
                <img
                  src={state.selectedImage || '/assets/icons/nav_icon.png'}
                  alt="title_logo_header"
                />
                {!state.fileUploaded && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                )}
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
};

export default CreateHeader;
