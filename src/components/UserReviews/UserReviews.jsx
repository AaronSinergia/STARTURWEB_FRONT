import React from 'react';
import './UserReviews.scss';

const UserReviews = () => {
  return (
    <section className="reviews_section">
      <h3 className="title_review">Lo que nues(t)ros usuarios opinan:</h3>
      <h3 className="userreview">
        Necesitaba una guía visual de la web que tenía en la cabeza.
        ¡Magníficos!
      </h3>
      <h3 className="userreview">Rápido. Fácil. Y para toda la familia.</h3>
      <h3 className="userreview">
        A veces necesito algo que me inspire. ¡Cuando necesito ayuda, siempre
        estáis!
      </h3>
    </section>
  );
};

export default UserReviews;
