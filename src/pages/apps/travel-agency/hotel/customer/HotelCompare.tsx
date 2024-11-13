import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import EcomTopRegionsMap from 'components/leaflet-maps/EcomTopRegionsMap';
import { mapMarkerPoints } from 'data/mapMarkerPoints';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import CompareHotelDetails from 'components/modules/travel-agency/hotel/hotel-compare/CompareHotelDetails';
import {
  hotelInfo,
  popularAmenitiesFields,
  reviewFields
} from 'data/travel-agency/customer/hotelCompare';
import CompareRoomDetails from 'components/modules/travel-agency/hotel/hotel-compare/CompareRoomDetails';
import HotelActions from 'components/modules/travel-agency/hotel/HotelActions';
import { Container } from 'react-bootstrap';
import TravelFooter from 'components/footers/TravelFooter';
import ResizeableNavbar from 'components/navbars/travel-agency/ResizeableNavbar';
import { hotelNavItems } from 'data/travel-agency/ResizeableNav';

const HotelCompare = () => {
  return (
    <>
      <ResizeableNavbar navItems={hotelNavItems} />
      <section className="pt-6 pb-9">
        <Container fluid="medium">
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
              <CompareHotelDetails
                hotelInfo={hotelInfo}
                reviewFields={reviewFields}
              />
            </CollapsibleContainer>
            <CollapsibleContainer
              collapseTitle="Room Details"
              id="roomDetailsCollapse"
              className="mt-8"
            >
              <CompareRoomDetails
                hotelInfo={hotelInfo}
                reviewFields={popularAmenitiesFields}
              />
            </CollapsibleContainer>
          </div>
        </Container>
      </section>
      <TravelFooter />
    </>
  );
};

export default HotelCompare;
