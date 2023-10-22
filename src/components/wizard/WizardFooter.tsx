import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import React from 'react';

const WizardFooter = () => {
  const { selectedStep, goToStep } = useWizardFormContext<FormData>();

  return (
    <div className="d-flex justify-content-between mb-0">
      <Button
        variant="link"
        className="p-0"
        startIcon={<FontAwesomeIcon icon={faChevronLeft} />}
        onClick={() => goToStep(selectedStep - 1)}
      >
        Previous
      </Button>
      <Button
        variant="primary"
        endIcon={<FontAwesomeIcon icon={faChevronRight} />}
        onClick={() => goToStep(selectedStep + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default WizardFooter;
