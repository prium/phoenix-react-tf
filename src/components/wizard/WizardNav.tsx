import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faFileAlt,
  faLock,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';

const WizardNavItem = ({
  icon,
  label,
  eventKey
}: {
  icon: IconProp;
  label: string;
  eventKey: number;
}) => {
  return (
    <Nav.Item as="li" className="nav-item">
      <Nav.Link className="fw-semi-bold" eventKey={eventKey}>
        <div className="text-center d-inline-block">
          <span className="nav-item-circle-parent">
            <span className="nav-item-circle">
              <FontAwesomeIcon icon={icon} />
            </span>
          </span>
          <span className="d-none d-md-block mt-1 fs-9">{label}</span>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};

const WizardNav = () => {
  return (
    <Nav className="justify-content-between nav-wizard">
      <WizardNavItem icon={faLock} eventKey={1} label="Account" />
      <WizardNavItem icon={faUser} eventKey={2} label="Personal" />
      <WizardNavItem icon={faFileAlt} eventKey={3} label="Billing" />
      <WizardNavItem icon={faCheck} eventKey={4} label="Done" />
    </Nav>
  );
};

export default WizardNav;
