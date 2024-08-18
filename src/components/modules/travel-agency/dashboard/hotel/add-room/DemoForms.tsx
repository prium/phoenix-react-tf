import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const demoForms = () => {
  return (
    <>
      <>
        {/* title with floating lavel , select option */}
        <h5 className="mb-2 mt-5 lh-1 text-body-highlight fw-bold">
          How many people are included in the base rate?
        </h5>
        <FloatingLabel controlId="peopleSelect" label="Select">
          <Form.Select>
            <option value="1">05 People</option>
            <option value="2">10 People</option>
            <option value="3">15 People</option>
          </Form.Select>
        </FloatingLabel>
      </>
      <>
        {/* title and select option */}
        <Form.Group controlId="roomCategory">
          <Form.Label className="form-label-header mb-1">
            Room category
          </Form.Label>
          <Form.Select>
            <option>King</option>
            <option value="1">Bridal suite</option>
            <option value="2">Single room</option>
          </Form.Select>
        </Form.Group>
      </>
    </>
  );
};

export default demoForms;
