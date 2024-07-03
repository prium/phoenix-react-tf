import { useWizardFormContext } from 'providers/WizardFormProvider';
import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { AddPropertyWizardFormData } from './AddProperty';

const AddPhotos = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { formData, onChange, validation } = methods;
  return (
    <>
      <h3 className="mb-6">Basic information</h3>
      <h3 className="mb-4">Property information</h3>
      <FloatingLabel controlId="propertyName" label="Property Name">
        <Form.Control
          type="text"
          defaultValue={formData.propertyName || 'With help text'}
          onChange={onChange}
          required={validation}
        />
      </FloatingLabel>
    </>
  );
};

export default AddPhotos;
