import React, { useState } from 'react';
import { Collapse, Card, Form } from 'react-bootstrap';
import FlightSearchForm from './FlightSearchForm';
import FlightPreviewForm from './FlightPreviewForm';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

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
  const [detailsVisible, setDetailsVisible] = useState(true);
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
            />
            <FlightTypeCheckbox
              name="flightType"
              id="returnTrip"
              value="returnTrip"
              label="Return"
              defaultChecked
            />
            <FlightTypeCheckbox
              name="flightType"
              id="multiCities"
              value="multiPleCities"
              label="Multiple cities"
            />
          </div>
          <FlightSearchForm />
          <Collapse in={detailsVisible}>
            <div id="flight-preview-form">
              <FlightPreviewForm />
            </div>
          </Collapse>
          <div className="d-flex flex-wrap gap-3 justify-content-between">
            <Button
              variant="link"
              to="#!"
              className={classNames(
                'fs-8 fw-semibold text-normal px-0 collapse-indicator',
                {
                  collapsed: detailsVisible
                }
              )}
              onClick={() => setDetailsVisible(!detailsVisible)}
              aria-controls="flight-preview-form"
            >
              {!detailsVisible ? 'Show' : 'Close'} details
              <FontAwesomeIcon
                icon={faAngleDown}
                className="ms-1 toggle-icon"
              />
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
