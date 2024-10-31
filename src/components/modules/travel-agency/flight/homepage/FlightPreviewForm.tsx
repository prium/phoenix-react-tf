import PhoenixReactRange from 'components/forms/PhoenixReactRange';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const FlightPreviewForm = () => {
  const [priceRange, setPriceRange] = useState([100, 186]);

  return (
    <div className="bg-body-highlight p-3 p-sm-4 rounded-2 mb-4">
      <Row className="g-3">
        <Col md={4} lg xl={2}>
          <h6 className="mb-2">Fare Type</h6>
          <Form.Check type="checkbox" id="flightFareType" className="mb-0">
            <Form.Check.Input
              type="checkbox"
              name="flightFareType"
              defaultChecked
              className="mt-0"
            />
            <Form.Check.Label className="d-block lh-sm fs-8 text-body fw-normal mb-0">
              Refundable ticket
            </Form.Check.Label>
          </Form.Check>
        </Col>
        <Col md={4} lg xl={2}>
          <h6 className="mb-3">Price Range</h6>
          <PhoenixReactRange
            values={priceRange}
            variant="primary-lighter"
            min={100}
            max={200}
            trackHeight={'4px'}
            classNames={'phoenix-react-range-slim px-2 pt-1 mb-3'}
            onChange={val => setPriceRange(val)}
          />
          <div className="d-flex flex-between-center">
            <div>
              <small className="d-none d-lg-block text-body-tertiary">
                Min
              </small>
              <h6 className="mb-0 text-body-highlight fw-semibold"> $100</h6>
            </div>
            <div className="text-end">
              <small className="d-none d-lg-block text-body-tertiary">
                Max
              </small>
              <h6 className="mb-0 text-body-highlight fw-semibold">$200</h6>
            </div>
          </div>
        </Col>
        <Col md={4} lg xl={2}>
          <h6 className="mb-2">Class</h6>
          <Form.Select className="mb-3" id="flightClass">
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="firstClass">First class</option>
          </Form.Select>
        </Col>
        <Col md={6} lg xl={2} className="ms-auto">
          <h6 className="mb-2">Onward depart time</h6>
          <Form.Select className="mb-3" id="departTime">
            <option value="1">12:00 - 18:00</option>
            <option value="2">18:00 - 24:00</option>
            <option value="3">06:00 - 12:00</option>
          </Form.Select>
        </Col>
        <Col md={4} lg xl={2}>
          <h6 className="mb-2">Return depart time</h6>
          <Form.Select className="mb-3" id="returnTime">
            <option value="1">12:00 - 18:00</option>
            <option value="2">18:00 - 24:00</option>
            <option value="3">06:00 - 12:00</option>
          </Form.Select>
        </Col>
      </Row>
    </div>
  );
};

export default FlightPreviewForm;
