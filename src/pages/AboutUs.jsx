import React from 'react';
import H2Box from '../components/H2Box/H2Box';

const AboutUs = () => {
  return (
    <>
      <H2Box className="about_title" text="Conócenos un poco mejor!" />
      <article className="about_article">
        <H2Box
          className="h2_darkgreen"
          text="star(t)UrWeb nace como un proyecto para de dar al mundo la oportunidad de crear una web sin conocimientos en programación..."
        />
        <H2Box
          className="h2_brightgreen"
          text="Imagina poder tener control y la facilidad de crear tu web. y si crees que puedes o quieres ir más allá te damos la opción a comprarla, y modificarla dónde y cómo quieras, es tuya!"
        />
        <H2Box
          className="h2_darkgreen"
          text="Tu imaginación es el único techo. Nosotros te llevaremos hasta las nubes!"
        />
        <H2Box
          className="h2_brightgreen"
          text="Si crees que puedes o quieres ir más allá te damos la opción a comprarla, y modificarla dónde y cómo quieras, es tuya!"
        />
      </article>
    </>
  );
};

export default AboutUs;
