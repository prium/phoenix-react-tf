import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { useWizardFormContext } from 'providers/WizardFormProvider';

const WizardFooter = ({ className }: { className?: string }) => {
  const { selectedStep, goToStep, getCanNextPage, getCanPreviousPage } =
    useWizardFormContext<FormData>();

  return (
    <div
      className={classNames(className, 'd-flex justify-content-between mb-0')}
    >
      <Button
        variant="link"
        className={classNames('p-0', {
          'd-none': !getCanPreviousPage
        })}
        startIcon={<FontAwesomeIcon icon={faChevronLeft} className="fs-10" />}
        onClick={() => goToStep(selectedStep - 1)}
      >
        Previous
      </Button>
      <Button
        variant="primary"
        className={classNames('ms-auto px-6', {
          'd-none': !getCanNextPage
        })}
        endIcon={<FontAwesomeIcon icon={faChevronRight} className="fs-10" />}
        onClick={() => goToStep(selectedStep + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default WizardFooter;
