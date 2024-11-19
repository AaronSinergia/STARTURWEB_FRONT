import React from 'react';
import './UserReviews.scss';

const UserReviews = () => {
  return (
    <section className="reviews_section">
      <h3 className="title_review">Lo que nues(t)ros usuarios opinan:</h3>
      <div id="userdiv">
        <article className="userreview">
          Necesitaba una guía visual de la web que tenía en la cabeza.
          ¡Magníficos!
        </article>
        <article className="userreview">
          Rápido. Fácil. Y para toda la familia.
        </article>
        <article className="userreview">
          A veces necesito algo que me inspire. ¡Cuando necesito ayuda, siempre
          estáis!
        </article>
      </div>
    </section>
  );
};

export default UserReviews;
