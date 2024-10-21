import { Outlet } from 'react-router-dom';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import ChatWidget from 'components/common/chat-widget/ChatWidget';
// import TopNav from 'pages/apps/travel-agency/landing/TopNav';
import NavbarMain from 'components/navbars/travel-agency/NavbarMain';
import Footer from 'components/footers/Footer';
import ResizeableNavbar from 'components/navbars/travel-agency/ResizeableNavbar';

const TravelAgencyLayout = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <>
      <NavbarMain />
      {/* <TopNav /> */}
      <ResizeableNavbar />

      <Outlet />
      <Footer />
      <ChatWidget />
    </>
  );
};

export default TravelAgencyLayout;
