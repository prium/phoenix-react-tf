import { useWizardFormContext } from 'providers/WizardFormProvider';
import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { AddPropertyWizardFormData } from './AddProperty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';

const GeneralAmenitiesForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange, validation } = methods;
  return (
    <>
      <div>
        <h3 className="mb-6">General amenities</h3>
        <Row className="g-3">
          <Col sm="auto" className="flex-sm-fill">
            <div className="form-icon-container">
              <FloatingLabel
                controlId="GeneralAmenitiesSearch"
                label="Search amenities"
              >
                <Form.Control
                  name="GeneralAmenitiesSearch"
                  type="text"
                  onChange={onChange}
                  required={validation}
                  placeholder="Search amenities"
                />
              </FloatingLabel>
              <FontAwesomeIcon
                icon={faSearch}
                transform="down-2"
                className="position-absolute text-body-quaternary fs-9 end-0 top-0 mt-3 me-3"
              />
            </div>
          </Col>
          <Col sm="auto">
            <Button variant="phoenix-primary" className="w-100 h-100 fs-8">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add amenity
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GeneralAmenitiesForm;
