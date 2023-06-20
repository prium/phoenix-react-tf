import DefaultLandingNavbar from 'components/layouts/navbar/default-landing-navbar/DefaultLandingNavbar';
import Brands from 'components/modules/landing/default/Brands';
import Features from 'components/modules/landing/default/features/Features';
import HeroHeader from 'components/modules/landing/default/HeroHeader';
import Testimonial from 'components/modules/landing/default/testimonial/Testimonial';
import React from 'react';

const Default = () => {
  return (
    <div>
      <DefaultLandingNavbar />
      <HeroHeader />
      <Brands />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Default;
