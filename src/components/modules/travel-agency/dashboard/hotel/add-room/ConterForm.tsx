import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { AddPropertyWizardFormData } from 'pages/apps/travel-agency/hotel/admin/AddProperty';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const ConterForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    type === 'increase' && setValue(value + 1);
    type === 'decrease' && value >= 1 && setValue(value - 1);
  };
  return (
    <InputGroup>
      <Button
        className="border px-3 bg-body-emphasis bg-body-hover lh-1"
        onClick={() => handleCount('decrease')}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>

      <FormControl
        type="number"
        value={value}
        onChange={onChange}
        className="input-spin-none text-center"
      />
      <Button
        className="border px-3 bg-body-emphasis bg-body-hover lh-1"
        onClick={() => handleCount('increase')}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </InputGroup>
  );
};

export default ConterForm;
