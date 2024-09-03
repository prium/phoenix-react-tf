import React from 'react';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import TopNav from 'pages/apps/travel-agency/landing/TopNav';
import NavbarMain from 'components/navbars/travel-agency/NavbarMain';
import TravelFooter from 'components/footers/TravelFooter';
import Footer from 'components/footers/Footer';

import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import EcomTopRegionsMap from 'components/leaflet-maps/EcomTopRegionsMap';
import { mapMarkerPoints } from 'data/mapMarkerPoints';
import CollapsibleContainer from 'components/modules/travel-agency/dashboard/hotel/hotel-compare/CollapsibleContainer';
import HotelDetails from 'components/modules/travel-agency/dashboard/hotel/hotel-compare/HotelDetails';
import {
  hotelPhotos,
  ratingData,
  facilities,
  amenities,
  rooms
} from 'data/travel-agency/customer/hotelCompare';
import RoomDetails from 'components/modules/travel-agency/dashboard/hotel/hotel-compare/RoomDetails';
import HotelActions from 'components/modules/travel-agency/dashboard/hotel/HotelActions';
import { Container } from 'react-bootstrap';

const HotelCompare = () => {
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
      <section className="pt-6 pb-9">
        <Container fluid={'medium'}>
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
          <h2 className="mb-4">Hotel Compare</h2>
          <HotelActions background={false} />
          <div
            className="w-100 border rounded-3 overflow-hidden my-5"
            style={{
              height: 220
            }}
          >
            <EcomTopRegionsMap data={mapMarkerPoints} />
          </div>
          <div className="position-relative scrollbar">
            <CollapsibleContainer
              collapseTitle="Hotel Details"
              id="hotelDetailsCollapse"
            >
              <HotelDetails
                hotelPhotos={hotelPhotos}
                ratingData={ratingData}
                facilities={facilities}
              />
            </CollapsibleContainer>
            <CollapsibleContainer
              collapseTitle="Room Details"
              id="roomDetailsCollapse"
              classNames="mt-8"
            >
              <RoomDetails accommodation={rooms} amenities={amenities} />
            </CollapsibleContainer>
          </div>
        </Container>
      </section>
      <TravelFooter />
      <Footer />
    </>
  );
};

export default HotelCompare;
