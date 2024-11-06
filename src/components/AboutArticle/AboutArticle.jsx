import React from 'react';
import './AboutArticle.scss';

const AboutArticle = () => {
  return (
    <>
      <article className="about_article">
        <section className="about_text">
          <h3 className="h3_darkgreen">
            star(t)UrWeb nace como un proyecto para de dar al mundo la
            oportunidad de crear una plantilla web sin conocimientos en
            programación...
          </h3>
          <h3 className="h3_brightgreen">
            Imagina poder tener el control y la facilidad de empezar tu web, de
            una manera profesional.
          </h3>
          <h3 className="h3_darkgreen">
            Si crees que puedes o quieres ir más allá te damos la opción de
            descargarla, y modificarla dónde y cómo quieras, es tuya!
          </h3>
          <h3 className="h3_brightgreen">
            Tu imaginación es el único techo. Nosotros te llevaremos hasta las
            nubes!
          </h3>
        </section>
        <section className="about_img">
          <img src="../public/starturweb_logo.png" alt="starturweb_logo" />
          <img
            src="../public/assets/imagine_person.png"
            alt="imagine_person_logo"
          />
          <img src="../public/assets/cart.png" alt="cart_logo" />
          <img src="../public/assets/cloud.png" alt="cloud_logo" />
        </section>
      </article>
    </>
  );
};

export default AboutArticle;
