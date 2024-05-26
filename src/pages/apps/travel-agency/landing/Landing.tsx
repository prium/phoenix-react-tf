import React from 'react';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import TopNav from './TopNav';
import NavbarMain from './NavbarMain';
import HeroHeader from './HeroHeader';
import SeasonOfTour from './SeasonOfTour';
import BestPlaces from './BestPlaces';

const Landing = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <>
      <TopNav />
      <NavbarMain />
      <HeroHeader />
      <SeasonOfTour />
      <BestPlaces />
    </>
  );
};

export default Landing;
