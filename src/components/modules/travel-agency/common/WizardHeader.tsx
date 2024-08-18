import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { wizardHeaderInterface } from 'data/wizard/wizard';

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

const WizardHeader = ({ data }: { data: wizardHeaderInterface[] }) => {
  return (
    <div className="scrollbar mb-4">
      <Nav
        as="ul"
        className="justify-content-between flex-nowrap nav-wizard nav-wizard-vertical-xl"
      >
        {data.map((item, index) => (
          <WizardNavItem
            key={index}
            icon={item.icon}
            step={index + 1}
            label={item.label}
          />
        ))}
      </Nav>
    </div>
  );
};

export default WizardHeader;
