import { useWizardFormContext } from 'providers/WizardFormProvider';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  accept_terms: boolean;
  email: string;
  password: string;
  confirm_password: string;
}

const WizardAccountForm = () => {
  const methods = useWizardFormContext<FormData>();
  const { formData, onChange, validation } = methods;

  return (
    <>
      <Form.Group className="mb-2">
        <Form.Label className="text-900" htmlFor="name">
          Name
        </Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="John Smith"
          value={formData.name}
          onChange={onChange}
          id="name"
          required={validation}
        />
        <Form.Control.Feedback type="invalid">
          This field is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="email">Email*</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email address"
          pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zAZ0-9]{2,4})+$"
          id="email"
          value={formData.email}
          onChange={onChange}
          required={validation}
        />
        <Form.Control.Feedback type="invalid">
          This field is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Row className="g-3 mb-3">
        <Col sm={6}>
          <Form.Group className="mb-2 mb-sm-0">
            <Form.Label className="text-900" htmlFor="password">
              Password*
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={onChange}
              required={validation}
            />{' '}
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-2">
            <Form.Label className="text-900" htmlFor="confirm-password">
              Confirm Password*
            </Form.Label>
            <Form.Control
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              id="confirm-password"
              value={formData.confirm_password}
              onChange={onChange}
              required={validation}
            />{' '}
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Check className="form-check">
        <Form.Check.Input
          type="checkbox"
          name="terms"
          checked={formData.accept_terms}
          onChange={onChange}
          id="checkbox"
        />
        <Form.Check.Label
          className="form-check-label text-900"
          htmlFor="checkbox"
        >
          I accept the <Link to="#!">terms</Link> and{' '}
          <Link to="#!">privacy policy</Link>
        </Form.Check.Label>
      </Form.Check>
    </>
  );
};

export default WizardAccountForm;
