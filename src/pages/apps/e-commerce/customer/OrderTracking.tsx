import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Section from 'components/base/Section';
import OrderTrackingTimeline from 'components/timelines/OrderTrackingTimeline';
import { orderTrackingTimelineData } from 'data/timelineData';
import { Breadcrumb, Col, Row } from 'react-bootstrap';

const OrderTracking = () => {
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <Breadcrumb className="mb-2">
          <Breadcrumb.Item href="#!">Page 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#!">Page 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#!" active>
            Default
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="d-flex gap-3 flex-wrap justify-content-between align-items-end mb-5">
          <div>
            <h2>Order #234 Status</h2>
            <p className="text-800 mb-0">
              Payment Via{' '}
              <a className="fw-bold" href="#!">
                Cash on delivery
              </a>
              ,<br className="d-sm-none" />
              <span className="ms-sm-1">Nov 12, 2021, 8:54AM.</span>
            </p>
          </div>
          <Button variant="outline-primary">
            <FontAwesomeIcon icon="phone" className="me-2" />
            Call Support
          </Button>
        </div>
        <Row className="gy-9 gx-5">
          <Col xs={12} lg={6}></Col>
          <Col xs={12} lg={6}>
            <OrderTrackingTimeline data={orderTrackingTimelineData} />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default OrderTracking;
