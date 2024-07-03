import {
  faCheck,
  faFile,
  faImage,
  faLocationDot,
  faMugSaucer,
  faShieldHalved,
  faUsd
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import { useWizardFormContext } from 'providers/WizardFormProvider';

const WizardNavItem = ({
  icon,
  label,
  step
}: {
  icon: IconProp;
  label: string;
  step: number;
}) => {
  const { selectedStep, totalStep } = useWizardFormContext();
  return (
    <Nav.Item as="li" className="nav-item">
      <Nav.Link
        className={classNames('py-0 py-xl-3', {
          done: selectedStep > step && step !== totalStep,
          complete: selectedStep > step && step !== totalStep - 1
        })}
        eventKey={step}
      >
        <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
          <span className="nav-item-circle-parent">
            <span className="nav-item-circle">
              <FontAwesomeIcon className="nav-item-icon" icon={icon} />
              <FontAwesomeIcon className="check-icon" icon={faCheck} />
            </span>
          </span>
          <span className="nav-item-title fs-9 fs-xl-8">{label}</span>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};

const WizardHeader = () => {
  return (
    <div className="scrollbar mb-4">
      <Nav
        as="ul"
        className="justify-content-between flex-nowrap nav-wizard nav-wizard-vertical-xl"
      >
        <WizardNavItem icon={faFile} step={1} label="Info" />
        <WizardNavItem icon={faLocationDot} step={2} label="Location" />
        <WizardNavItem icon={faMugSaucer} step={3} label="Amenities" />
        <WizardNavItem icon={faImage} step={4} label="Photos" />
        <WizardNavItem icon={faUsd} step={5} label="Finance" />
        <WizardNavItem icon={faShieldHalved} step={6} label="Policies" />
        <WizardNavItem icon={faCheck} step={7} label="Done" />
      </Nav>
    </div>
  );
};

export default WizardHeader;
