import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import React from 'react';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';

const EcomLatestReviewsTable = () => {
  return (
    <Row className="align-items-end justify-content-between pb-5 g-3">
      <Col xs="auto">
        <h3>Latest reviews</h3>
        <p className="text-700 lh-sm mb-0">Payment received across all channels</p>
      </Col>
      <Col xs={12} md="auto">
        <Row className="g-2 gy-3">
          <Col xs="auto" className="flex-1">
            <SearchBox placeholder="Search..." size="sm" />
          </Col>
          <Col xs="auto">
            <Button variant="phoenix-secondary" size="sm" className="bg-white hover-bg-100 me-2">
              All products
            </Button>
            <Dropdown className="d-inline">
              <Dropdown.Toggle
                variant="phoenix-secondary"
                size="sm"
                className="bg-white hover-bg-100 dropdown-caret-none"
              >
                <FontAwesomeIcon icon="ellipsis-h" className="10" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EcomLatestReviewsTable;
