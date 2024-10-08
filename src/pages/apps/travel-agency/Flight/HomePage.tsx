import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import NavbarHome from 'components/navbars/travel-agency/NavbarHome';
import { Container } from 'react-bootstrap';
import bgIllustrations from 'assets/img/bg/44.png';
import FlightSearch from 'components/modules/travel-agency/flight/homepage/FlightSearch';
import FlightListing from 'components/modules/travel-agency/flight/homepage/FlightListing';
import FlightFooter from 'components/modules/travel-agency/flight/homepage/FlightFooter';
import FlightPromoModal from 'components/modals/FlightPromoModal';
import { useState } from 'react';

const FlightHomePage = () => {
  const [showPromoModal, setShowPromoModal] = useState(true);
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
      <section className="p-0">
        <Container fluid className="px-0">
          <div className="position-relative" style={{ height: '19rem' }}>
            <div
              className="bg-holder"
              style={{
                backgroundImage: `url(${bgIllustrations})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </Container>
        <Container
          fluid="small"
          className="mb-6"
          style={{ marginTop: '-12rem' }}
        >
          <FlightSearch />
          <FlightListing />
        </Container>
        <FlightFooter />
      </section>
      <FlightPromoModal
        show={showPromoModal}
        handleClose={() => setShowPromoModal(false)}
      />
    </>
  );
};

export default FlightHomePage;
