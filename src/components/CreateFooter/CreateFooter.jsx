import React, { useContext } from 'react';
import { context } from '../../hooks/context/context';
import { footerLogos } from '../../utils/footer/footerLogos';
import './CreateFooter.scss';

const CreateFooter = () => {
  const { state, dispatch } = useContext(context);

  const handleFooterSelection = (footer) => {
    dispatch({ type: 'SET_SELECTED_FOOTER', payload: footer });
    localStorage.setItem('selectedFooter', state.selectedFooter);
  };

  return (
    <>
      {!state.selectedFooter ? (
        <footer className="footer_section">
          <div className="logos_rrss_div">
            {footerLogos.map((logoData, index) => (
              <a key={index} href="pon_tu_url_aquí" target="_blank">
                <img
                  src={logoData.src}
                  alt="pon_tu_texto_alternativo_aquí"
                  className={logoData.className}
                />
              </a>
            ))}
          </div>
          <h3 className="create_footer_title">
            © Creado por {localStorage.getItem('USERNAME')}
          </h3>
        </footer>
      ) : (
        <section className="display_selected_header">
          {state.selectedFooter === 'style1' && <></>}
          {state.selectedFooter === 'style2' && <></>}
        </section>
      )}
    </>
  );
};

export default CreateFooter;
