import { useWizardFormContext } from 'providers/WizardFormProvider';
import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { AddPropertyWizardFormData } from './AddProperty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationCrosshairs,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import Mapbox from 'components/base/MapBox';

const LocationForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;
  return (
    <>
      <h3 className="mb-6">Location</h3>
      <div className="form-icon-container mb-3">
        <Form.Floating>
          <Form.Control
            id="LacationAddress"
            name="LacationAddress"
            type="text"
            placeholder="Search Address"
            className="form-icon-input"
          />
          <label
            htmlFor="LacationAddress"
            className="form-icon-label text-body-tertiary"
          >
            Search Address
          </label>
        </Form.Floating>
        <FontAwesomeIcon
          icon={faLocationDot}
          className="text-body fs-10 form-icon "
        />
        <FontAwesomeIcon
          icon={faLocationCrosshairs}
          className="position-absolute text-primary fs-9 end-0 top-0 mt-3 me-3"
        />
      </div>
      <Mapbox
        className="rounded-3 border overflow-hidden mt-3 mb-6"
        options={{
          attributionControl: false,
          center: [-74.0020158, 40.7228022],
          zoom: 14,
          scrollZoom: false
        }}
        style={{ height: '250px' }}
      />
      <FloatingLabel
        className="mb-3"
        controlId="lacationStreet"
        label="Apartment/Street"
      >
        <Form.Control
          type="text"
          name="lacationStreet"
          placeholder="Apartment/Street"
          onChange={onChange}
        />
      </FloatingLabel>
      <Row className="g-3">
        <Col md={6}>
          <FloatingLabel
            className="mb-3 mb-md-0"
            controlId="lacationCity"
            label="City"
          >
            <Form.Control
              type="text"
              name="lacationCity"
              placeholder="City"
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="lacationState" label="State(optional)">
            <Form.Control
              type="text"
              name="lacationState"
              placeholder="State(optional)"
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>

        <Col md={6}>
          <FloatingLabel controlId="lacationZipCode" label="Zip Code">
            <Form.Control
              type="text"
              name="lacationZipCode"
              placeholder="Zip Code"
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="lacationCountry" label="Country/Region">
            <Form.Control
              type="text"
              name="lacationCountry"
              placeholder="Country/Region"
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <div className="d-flex align-items-center gap-3 mt-6">
        <h4>Show your specific location</h4>
        <Form.Check
          inline
          name="locationSwitchChecked"
          type="switch"
          id="locationSwitchChecked"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default LocationForm;
