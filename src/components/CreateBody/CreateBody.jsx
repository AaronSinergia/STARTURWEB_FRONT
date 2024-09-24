import React, { useContext } from 'react';
import { context } from '../../hooks/context/context';
import './CreateBody.scss';

const CreateBody = () => {
  const { state, dispatch } = useContext(context);

  const handleBodySelection = (body) => {
    dispatch({ type: 'SET_SELECTED_BODY', payload: body });
    localStorage.setItem('selectedBody', state.selectedBody);
  };

  return (
    <>
      {!state.selectedBody ? (
        <section className="body_section">
          <h3>2. Selecciona un cuerpo</h3>
          <div
            className="body_div"
            onClick={() => handleBodySelection('BodyStyle1')}
          >
            <section className="section_body">
              <h3>
                Aquí vas a poner tu texto, por lo tanto cuando estés creando la
                web, recuerda modificarlo. Esto es sólo un ejemplo sencillo para
                que inicies tu web, te damos unas pautas y unos ejemplos
              </h3>
            </section>
            <article className="article_body">
              <h3>¿Por qué elegirnos?</h3>
              <h3>
                Diseño personalizable Sitios web optimizados para SEO
                Integración con redes sociales Soporte técnico disponible 24/7
                Integración con redes sociales ¡Y mucho más!
              </h3>
            </article>
          </div>
          <div
            className="body_div_two"
            onClick={() => handleBodySelection('BodyStyle2')}
          >
            <section className="section_body_two">
              <h3>
                Aquí vas a poner tu texto, por lo tanto cuando estés creando la
                web, recuerda modificarlo. Esto es sólo un ejemplo sencillo para
                que inicies tu web, te damos unas pautas y unos ejemplos.
              </h3>
            </section>
            <article className="article_body_two">
              <h3>¿Por qué elegirnos?</h3>
              <h3>
                Diseño personalizable Sitios web optimizados para SEO
                Integración con redes sociales Soporte técnico disponible 24/7
                Integración con redes sociales ¡Y mucho más!
              </h3>
            </article>
          </div>
        </section>
      ) : (
        <section className="display_selected_body">
          {state.selectedBody === 'BodyStyle1' && (
            <>
              <div className="body_div">
                <section className="section_body">
                  <h3>
                    Aquí vas a poner tu texto, por lo tanto cuando estés creando
                    la web, recuerda modificarlo. Esto es sólo un ejemplo
                    sencillo para que inicies tu web, te damos unas pautas y
                    unos ejemplos.
                  </h3>
                </section>
                <article className="article_body">
                  <h3>¿Por qué elegirnos?</h3>
                  <h3>
                    Diseño personalizable Sitios web optimizados para SEO
                    Integración con redes sociales Soporte técnico disponible
                    24/7 Integración con redes sociales ¡Y mucho más!
                  </h3>
                </article>
              </div>
            </>
          )}
          {state.selectedBody === 'BodyStyle2' && (
            <>
              <div className="body_div_two">
                <section className="section_body_two">
                  <h3>
                    Aquí vas a poner tu texto, por lo tanto cuando estés creando
                    la web, recuerda modificarlo. Esto es sólo un ejemplo
                    sencillo para que inicies tu web, te damos unas pautas y
                    unos ejemplos
                  </h3>
                </section>
                <article className="article_body_two">
                  <h3>¿Por qué elegirnos?</h3>
                  <h3>
                    Diseño personalizable Sitios web optimizados para SEO
                    Integración con redes sociales Soporte técnico disponible
                    24/7 Integración con redes sociales ¡Y mucho más!
                  </h3>
                </article>
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
};

export default CreateBody;
