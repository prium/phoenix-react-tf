import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import NavbarHome from 'components/navbars/travel-agency/NavbarHome';

const FlightHomePage = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });

  return (
    <>
      <section className="container-small py-0">
        <NavbarHome currentPage="Flight" />
      </section>
    </>
  );
};

export default FlightHomePage;
