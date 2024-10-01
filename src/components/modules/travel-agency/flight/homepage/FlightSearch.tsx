import React from 'react';
import { Card, Form } from 'react-bootstrap';
import FlightSearchForm from './FlightSearchForm';
import FlightPreviewForm from './FlightPreviewForm';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

interface FlightTypeCheckboxProps {
  name: string;
  id: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}
const FlightTypeCheckbox = ({
  name,
  id,
  value,
  label,
  defaultChecked
}: FlightTypeCheckboxProps) => {
  return (
    <Form.Check type="radio" id={id} inline>
      <Form.Check.Input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked || false}
      />
      <Form.Check.Label className="fs-8 text-body">{label}</Form.Check.Label>
    </Form.Check>
  );
};

const FlightSearch = () => {
  return (
    <Form>
      <Card className="position-relative mb-6">
        <Card.Body>
          <div className="mb-4">
            <FlightTypeCheckbox
              name="flightType"
              id="oneWay"
              value="oneway"
              label="One way"
              defaultChecked
            />
            <FlightTypeCheckbox
              name="flightType"
              id="returnTrip"
              value="returnTrip"
              label="Return"
            />
            <FlightTypeCheckbox
              name="flightType"
              id="multiCities"
              value="multiPleCities"
              label="Multiple cities"
            />
          </div>
          <FlightSearchForm />
          <FlightPreviewForm />
          <div className="d-flex flex-wrap gap-3 justify-content-between">
            <Button
              variant="link"
              to="#!"
              className="fs-8 fw-semibold text-normal px-0"
            >
              Close details
              <FontAwesomeIcon icon={faAngleUp} className="ms-1" />
            </Button>

            <Button
              variant="primary"
              className="btn-lg flex-1"
              style={{ maxWidth: '15rem' }}
            >
              Search
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default FlightSearch;
