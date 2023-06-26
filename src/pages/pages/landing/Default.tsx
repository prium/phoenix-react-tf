import DefaultLandingNavbar from 'components/layouts/navbar/default-landing-navbar/DefaultLandingNavbar';
import AddressSection from 'components/modules/landing/default/address/AddressSection';
import Blog from 'components/modules/landing/default/blog/Blog';
import Brands from 'components/modules/landing/default/Brands';
import Features from 'components/modules/landing/default/features/Features';
import FunFacts from 'components/modules/landing/default/fun-facts/FunFacts';
import Gallery from 'components/modules/landing/default/Gallery';
import HeroHeader from 'components/modules/landing/default/HeroHeader';
import Pricing from 'components/modules/landing/default/pricing/Pricing';
import TeamSection from 'components/modules/landing/default/team/TeamSection';
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
      <FunFacts />
      <Gallery />
      <Pricing />
      <Blog />
      <AddressSection />
      <TeamSection />
    </div>
  );
};

export default Default;
