import React from 'react';
import H2Box from '../components/H2Box/H2Box';
import config from '../config/config';

const Contact = () => {
  const handleImageClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <H2Box className="contact_title" text="Contác(t)anos" />
      <article className="contact_article">
        <img
          src="./public/assets/icons/linkedin_contact.png"
          alt="linkedin_contact_logo"
          onClick={() =>
            handleImageClick(
              'https://www.linkedin.com/in/aaron-carrasco-romero/'
            )
          }
        />
        <H2Box
          className="h2_darkgreen"
          text="Aprende más sobre nuestra historia...... ¿Quizá podamos crear una nueva juntos? 📖"
        />
        <img
          src="./public/assets/icons/mail_contact.png"
          alt="mail"
          onClick={() => handleImageClick('mailto:a.carrasco9@me.com')}
        />
        <H2Box
          className="h2_brightgreen"
          text="¿Si seguimos usando el correo, no es sólo para borrar spam, verdad? 💌"
        />
        <img
          src="./public/assets/icons/whatsapp_contact.png"
          alt="whatsapp_contact_logo"
          onClick={() =>
            (window.location.href = `https://wa.me/${config.whatsappNumber}`)
          }
        />
        <H2Box
          className="h2_darkgreen"
          text="¿Eres más directo? Escríbenos, prometemos no dejarte en visto ✔"
        />
        <img
          src="./public/assets/icons/down_arrow.png"
          alt="downarrow_contact_logo"
        />
        <H2Box
          className="h2_brightgreen"
          text="Puedes ver otros proyectos, haciendo click en los logos de abajo."
        />
      </article>
    </>
  );
};

export default Contact;
