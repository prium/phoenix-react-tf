import DatePicker from 'components/base/DatePicker';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const ProjectManagement = () => {
  return (
    <Row className="gy-3 justify-content-between">
      <Col md={9} xs="auto">
        <h2 className="mb-2 text-1100">Projects Dashboard</h2>
        <h5 className="text-700 fw-semi-bold">Here’s what’s going on at your business right now</h5>
      </Col>
      <Col md={3} xs="auto">
        <DatePicker />
      </Col>
    </Row>
  );
};

export default ProjectManagement;
