import React from 'react';
import config from '../../config/config';
import { handleImageUrlClick } from '../../function/handleFunctions';
import './ContactArticle.scss';

const ContactArticle = () => {
  return (
    <>
      <article className="contact_article">
        <section className="contact_img">
          <img
            src="./public/assets/icons/linkedin_contact.png"
            alt="linkedin_contact_logo"
            onClick={() =>
              handleImageUrlClick(
                'https://www.linkedin.com/in/aaron-carrasco-romero/'
              )
            }
          />

          <img
            src="./public/assets/icons/mail_contact.png"
            alt="mail"
            onClick={() => handleImageUrlClick('mailto:a.carrasco9@me.com')}
          />

          <img
            src="./public/assets/icons/whatsapp_contact.png"
            alt="whatsapp_contact_logo"
            onClick={() =>
              (window.location.href = `https://wa.me/${config.whatsappNumber}`)
            }
          />

          <img
            src="./public/assets/icons/down_arrow.png"
            alt="downarrow_contact_logo"
          />
        </section>
        <section className="contact_text">
          <h3 className="h3_darkgreen">
            Aprende más sobre nuestra historia...... ¿Quizá podamos crear una
            nueva juntos? 📖
          </h3>
          <h3 className="h3_brightgreen">
            ¿Si seguimos usando el correo, no es sólo para borrar spam, verdad?
            💌
          </h3>
          <h3 className="h3_darkgreen">
            ¿Eres más directo? Escríbenos, prometemos no dejarte en visto ✔
          </h3>
          <h3 className="h3_brightgreen">
            Puedes ver otros proyectos, haciendo click en los logos de abajo.
          </h3>
        </section>
      </article>
    </>
  );
};

export default ContactArticle;
