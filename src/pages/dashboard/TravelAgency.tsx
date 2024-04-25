import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { VisitorsCard } from 'components/modules/travel-agency/dashboard/VisitorsCard';
import { TravelStatsCard } from 'components/modules/travel-agency/dashboard/TravelStatsCard';
import { FinancialActivitiesCard } from 'components/modules/travel-agency/dashboard/FinancialActivitiesCard';
import { HolidaysCard } from 'components/modules/travel-agency/dashboard/HolidaysCard';
import { IntegrationsCard } from 'components/cta/IntegrationsCard';

const TravelAgency = () => {
  return (
    <>
      <Row className="mb-4 mb-xl-6 mb-xxl-4 gy-3 justify-content-between">
        <Col xs="auto">
          <h2> Travel Agency </h2>
        </Col>
        <Col xs="auto">
          <div className="d-flex gap-3">
            <Link to="#!" className="btn btn-phoenix-primary">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              New Package
            </Link>
            <Link to="#!" className="btn btn-primary px-4 px-sm-11">
              <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
              Book Now
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="gx-3">
        <Col xxl={7}>
          <Row className="gx-7 pe-xxl-3">
            <Col xs={12} xl={5} xxl={12}>
              <TravelStatsCard />
            </Col>
            <Col xs={12} xl={7} xxl={12}>
              <FinancialActivitiesCard />
            </Col>
          </Row>
        </Col>
        <Col xxl={5}>
          <Row className="g-3">
            <Col xs={12} md={6} xxl={12}>
              <VisitorsCard />
            </Col>
            <Col xs={12} md={6} xxl={12}>
              <HolidaysCard />
            </Col>
            <Col xs={12}>
              <IntegrationsCard />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="g-3 mb-5">
        <Col xl={5} xxl={7}>
          {/* +GrossProfitCard */}
        </Col>
        <Col xl={5} xxl={7}>
          {/* +BookingsCard */}
        </Col>
      </Row>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 pb-9 bg-body-emphasis border-top">
        {/* Flights */}
      </div>
    </>
  );
};

export default TravelAgency;
