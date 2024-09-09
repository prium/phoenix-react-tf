import React from 'react';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import TopNav from 'pages/apps/travel-agency/landing/TopNav';
import NavbarMain from 'components/navbars/travel-agency/NavbarMain';
import TravelFooter from 'components/footers/TravelFooter';
import Footer from 'components/footers/Footer';

import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import {
  faEnvelope,
  faMap,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import SummaryCard from 'components/cards/SummaryCard';
import DetailsGallery from 'components/image-gallery/DetailsGallery';
import { hotelImages } from 'data/travel-agency/customer/hotelDetails';
import HotelDetailsTab from 'components/modules/travel-agency/dashboard/hotel/hotel-details/HotelDetailsTab';

const HotelDetails = () => {
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
      <section className="pt-4 pb-9">
        <Container fluid={'medium'}>
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
          <h2 className="mb-4">Hotel Details</h2>
          <Row className="g-4 flex-between-end mb-5">
            <Col md={8} lg={9}>
              <h1 className="mb-2 fw-semibold">
                Radisson Blu Water Garden Hotel, Dhaka
              </h1>
              <div className="mb-1">
                <a className="text-body-tertiary" href="#!">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="me-2 text-body"
                  />
                  Airport Rd, Dhaka Cantonment, Dhaka, 1206, Bangladesh
                </a>
              </div>
              <div className="mb-1">
                <a className="text-body-tertiary" href="tel:+88029834555">
                  <FontAwesomeIcon icon={faPhone} className="me-2 text-body" />
                  +880 29834555
                </a>
              </div>
              <div className="mb-1">
                <a
                  className="text-body-tertiary"
                  href="mailto:sales.dhaka@radisson.com"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-2 text-body"
                    transform={'down-1'}
                  />
                  sales.dhaka@radisson.com
                </a>
              </div>
            </Col>
            <Col md={4} lg={3}>
              <div className="d-flex flex-md-column align-items-center align-items-md-end gap-3">
                <h5 className="mb-0 text-nowrap">
                  <span className="text-body-tertiary me-2 fw-normal">
                    Rated
                  </span>
                  <span className="text-primary me-2">Good</span>
                  <Badge bg="primary">4.3</Badge>
                </h5>
                <Button
                  variant="phoenix-primary"
                  className="px-5 px-lg-8 w-100 w-md-auto"
                  startIcon={<FontAwesomeIcon icon={faMap} className="me-2" />}
                >
                  Show in map
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="g-3">
            <Col xl={8}>
              <DetailsGallery images={hotelImages} />
              <HotelDetailsTab />
            </Col>
            <Col xl={4}>
              <SummaryCard page="hotel-details" classNames="mt-3 mt-xl-0" />
            </Col>
          </Row>
        </Container>
      </section>
      <TravelFooter />
      <Footer />
    </>
  );
};

export default HotelDetails;
