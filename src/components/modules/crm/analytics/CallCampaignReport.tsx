import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnalyticsCallCampaignChart from 'components/charts/e-charts/AnalyticsCallCampaignChart';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const CallCampaignReport = () => {
  return (
    <>
      <Row className="justify-content-between mb-4">
        <Col xs={12}>
          <h3>Call Campaign Reports</h3>
          <p className="text-700">All call campaigns succeeded.</p>
        </Col>
        <Col xs={12}>
          <div className="d-flex">
            <FontAwesomeIcon icon="circle" className="text-primary me-2" />
            <h6 className="mb-0 me-3 lh-base">Campaign</h6>
          </div>
        </Col>
      </Row>
      <AnalyticsCallCampaignChart height="290px" width="100%" />
    </>
  );
};

export default CallCampaignReport;
