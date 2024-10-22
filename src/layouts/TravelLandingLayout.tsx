import { Outlet } from 'react-router-dom';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import NavbarMain from 'components/navbars/travel-agency/NavbarMain';
import Footer from 'pages/apps/travel-agency/landing/Footer';
import ResizeableNavbar from 'components/navbars/travel-agency/ResizeableNavbar';
import { landingNavItems } from 'data/travel-agency/ResizeableNav';

const TravelLandingLayout = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <>
      <NavbarMain />
      <ResizeableNavbar navItems={landingNavItems} />
      <Outlet />
      <Footer />
    </>
  );
};

export default TravelLandingLayout;
