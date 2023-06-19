import DefaultLandingNavbar from 'components/layouts/navbar/default-landing-navbar/DefaultLandingNavbar';
import Brands from 'components/modules/landing/default/Brands';
import HeroHeader from 'components/modules/landing/default/HeroHeader';
import React from 'react';

const Default = () => {
  return (
    <div>
      <DefaultLandingNavbar />
      <HeroHeader />
      <Brands />
    </div>
  );
};

export default Default;
