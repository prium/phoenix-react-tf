import {
  faChevronLeft,
  faChevronRight,
  faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import usePhoenixForm from 'hooks/usePhoenixForm';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import React from 'react';
import { Form } from 'react-bootstrap';

interface FormData {
  name: string;
  terms: boolean;
  email: string;
}

const StepOneForm = () => {
  const { formData, onSubmit, onChange } = usePhoenixForm<FormData>({
    email: 'jggh'
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Form.Group controlId="tooltipLastName" className="position-relative">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            id="terms"
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            name="terms"
            onChange={onChange}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

const WizardExample = () => {
  const { step } = useWizardFormContext();
  return (
    <div>
      <StepOneForm />
      <div className="d-flex justify-content-between mb-0">
        <Button
          variant="link"
          className="p-0"
          startIcon={<FontAwesomeIcon icon={faChevronLeft} />}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          endIcon={<FontAwesomeIcon icon={faChevronRight} />}
          // className="p-0"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default WizardExample;
