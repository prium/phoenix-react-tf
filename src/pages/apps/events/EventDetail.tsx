import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import coverImg from '../../../assets/img/generic/34.png';
import { Button, Col, Row } from 'react-bootstrap';
import EventTitleCard from 'components/cards/EventTitleCard';
import Singers from 'components/modules/events/Singers';
import TopicCovered from 'components/modules/events/TopicCovered';
import ResponsesAndShare from 'components/modules/events/ResponsesAndShare';
import brandImg from '../../../assets/img/brand2/b.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Location from 'components/modules/events/Location';
import Badge from 'components/base/Badge';
import Events from 'components/modules/events/Events';

const EventDetail = () => {
  return (
    <div className="pb-9">
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <h2 className="mb-4 mb-lg-6">Event details</h2>
      <img
        src={coverImg}
        alt=""
        className="rounded w-100 fit-cover mb-5 mb-md-6 mb-xl-8"
        style={{ minHeight: '250px' }}
      />
      <Row className="gx-lg-9">
        <Col xl={8} className="border-end-xl border-300">
          <EventTitleCard />
          <h2 className="mb-3">About this event</h2>
          <p className="text-justify text-800 mb-6 mb-xxl-8">
            The Festival Season hopes to continue its rescheduled events in 2023
            during the spring block. This will be a continuation of the
            tradition for the loyal fanbase to watch a jam-packed day full of
            exciting top-notch performances. With a unique lineup, you’ll know
            what to expect and get ready to embrace the festivity. Moreover,
            we’ve added a detailed list of the performers, with details of
            dates, lineups and prospective entry requirements. We will keep you
            posted with necessary updates regarding the event.
          </p>
          <Singers />
          <TopicCovered />
          <h4 className="mb-3 text-1000 fs-xxl-6">Refund Policy:</h4>
          <ul className="mb-6 ps-4">
            <li>Contact the organizer to request a refund.</li>
            <li>Eventbrite’s fee is nonrefundable.</li>
          </ul>
          <ResponsesAndShare />
        </Col>
        <Col xl={4}>
          <h3 className="mb-5 mb-xl-4">Organized by</h3>
          <Row className="g-2 mb-6 align-items-center">
            <Col xs="auto">
              <img
                src={brandImg}
                alt=""
                className="rounded img-fluid"
                width="40"
                height="40"
              />
            </Col>
            <Col sm="auto" className="flex-1">
              <Link to="#!" className="mb-0 text-primary fw-semi-bold lh-sm">
                Bass Events, Inc.
              </Link>
            </Col>
            <Col sm="auto" xl={12} xxl="auto">
              <Button variant="Link" className="text-900 p-0 me-1">
                10k Followers
              </Button>
              <Button variant="phoenix-primary" className="px-3">
                <FontAwesomeIcon icon="user-plus" className="me-2" />
                Follow
              </Button>
            </Col>
          </Row>
          <Location />
          <h3 className="mb-3">Tags</h3>
          <div className="d-flex flex-wrap pb-8 border-bottom">
            <Badge variant="tag" className="me-2">
              Music
            </Badge>
            <Badge variant="tag" className="me-2">
              CONCERT
            </Badge>
            <Badge variant="tag">Greatest show on earth</Badge>
          </div>
          <Row className="g-0 py-3 border-bottom border-dashed border-300 align-items-end justify-content-between">
            <Col xs="auto">
              <h3 className="flex-1 mb-0 text-nowrap me-3">Upcoming events</h3>
            </Col>
            <Col xs="auto">
              <Link to="#!" className="fw-bold fs-9">
                See more
              </Link>
            </Col>
          </Row>
          <Events />
        </Col>
      </Row>
    </div>
  );
};

export default EventDetail;
