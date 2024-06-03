import React, { useEffect } from 'react';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import TopNav from './TopNav';
import NavbarMain from './NavbarMain';
import HeroHeader from './HeroHeader';
import SeasonOfTour from './SeasonOfTour';
import BestPlaces from './BestPlaces';
import BestHotel from './BestHotel';
import Gallery from './Gallery';
import LatestPosts from './LatestPosts';
import Cta from './Cta';
import LatestPhotos from './LatestPhotos';

const Landing = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  useEffect(() => {
    document.body.classList.add('bg-body-emphasis');
    document.body.setAttribute(
      'style',
      document.body.getAttribute('style')
        ? document.body.getAttribute('style') +
            '; --phoenix-scroll-margin-top: 1.2rem'
        : '--phoenix-scroll-margin-top: 1.2rem'
    );
    return () => {
      document.body.classList.remove('bg-body-emphasis');
      document.body.removeAttribute('style');
    };
  }, []);
  return (
    <>
      <TopNav />
      <NavbarMain />
      <HeroHeader />
      <SeasonOfTour />
      <BestPlaces />
      <BestHotel />
      <Gallery />
      <LatestPosts />
      <Cta />
      <LatestPhotos />
    </>
  );
};

export default Landing;
