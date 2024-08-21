import React from 'react';
import H2Box from '../components/H2Box/H2Box';

const AboutUs = () => {
  return (
    <>
      <H2Box className="about_title" text="Conócenos un poco mejor!" />
      <article className="about_article">
        <img src="../../public/starturweb_logo.png" alt="starturweb_logo" />
        <H2Box
          className="h2_darkgreen"
          text="star(t)UrWeb nace como un proyecto para de dar al mundo la oportunidad de crear una web sin conocimientos en programación..."
        />
        <img
          src="../../public/assets/imagine_person.png"
          alt="imagine_person_logo"
        />
        <H2Box
          className="h2_brightgreen"
          text="Imagina poder tener el control y la facilidad de crear tu web, de una manera profesional."
        />
        <img src="../../public/assets/cart.png" alt="cart_logo" />
        <H2Box
          className="h2_darkgreen"
          text="Si crees que puedes o quieres ir más allá te damos la opción a comprarla, y modificarla dónde y cómo quieras, es tuya!"
        />
        <img src="../../public/assets/cloud.png" alt="cloud_logo" />
        <H2Box
          className="h2_brightgreen"
          text="Tu imaginación es el único techo. Nosotros te llevaremos hasta las nubes!"
        />
      </article>
    </>
  );
};

export default AboutUs;
