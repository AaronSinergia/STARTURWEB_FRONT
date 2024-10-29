import React from 'react';
import H2Box from '../components/H2Box/H2Box';
import AboutArticle from '../components/AboutArticle/AboutArticle';

const AboutUs = () => {
  return (
    <>
      <H2Box className="about_title" text="Conócenos un poco mejor!" />
      <AboutArticle />
    </>
  );
};

export default AboutUs;
