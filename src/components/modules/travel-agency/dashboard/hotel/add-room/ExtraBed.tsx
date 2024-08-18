import { AddPropertyWizardFormData } from 'pages/apps/travel-agency/hotel/admin/AddProperty';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import React, { useState } from 'react';
import {
  Col,
  Collapse,
  Form,
  FormControl,
  InputGroup,
  Row
} from 'react-bootstrap';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const ExtraBed = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    type === 'increase' && setValue(value + 1);
    type === 'decrease' && value >= 1 && setValue(value - 1);
  };

  return (
    <>
      <div className="d-flex align-items-center gap-2 mt-7">
        <h4>Extra bed option</h4>
        <Form.Check
          inline
          name="extraBedSwitch"
          type="switch"
          id="extraBedSwitch"
          onChange={onChange}
          onClick={() => setOpen(!open)}
          aria-controls="extraBedSwitch"
          defaultChecked={open}
        />
      </div>
      <p className="fs-9 text-body-tertiary mb-0">Can you provide extra bed</p>
      <Collapse in={open}>
        <div>
          <div className="mt-4">
            <Row className="gx-3">
              <Col xs={6} sm={4} xxl={5}>
                <Form.Group controlId="numberOfBed">
                  <Form.Label className="form-label-header mb-1">
                    Number of bed
                  </Form.Label>
                  <InputGroup className="gap-2">
                    <Button
                      className="border rounded px-3 bg-body-emphasis bg-body-hover lh-1"
                      onClick={() => handleCount('decrease')}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>

                    <FormControl
                      type="number"
                      value={value}
                      onChange={onChange}
                      className="input-spin-none rounded text-center"
                    />
                    <Button
                      className="border rounded px-3 bg-body-emphasis bg-body-hover lh-1"
                      onClick={() => handleCount('increase')}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col xs={6} sm={4} xxl={5}>
                <Form.Group controlId="roomCategory">
                  <Form.Label className="form-label-header mb-1">
                    Bed type
                  </Form.Label>
                  <Form.Select>
                    <option>Twin bed</option>
                    <option>King bed</option>
                    <option>Queen bed</option>
                    <option>Single bed</option>
                    <option>Double bed</option>
                    <option>Twin bed</option>
                    <option>Quad bed</option>
                    <option>Executive Suite</option>
                    <option>Bunk bed</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </div>
          <h5 className="mt-4 mb-3">
            Check the box(es) if you can accommodate the following guests in
            extra beds.
          </h5>
          <div className="row gx-2 gy-0 align-items-center mb-3">
            <Col xs={12} sm="auto">
              <Form.Check
                type="radio"
                id="breakfastIncludedTab"
                label="Yes, it's included in the price"
                name="breakfastRadio"
                inline
              />
              <Form.Check
                type="radio"
                id="breakfastNotIncludedTab"
                label="No"
                name="breakfastRadio"
                inline
              />
            </Col>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default ExtraBed;
