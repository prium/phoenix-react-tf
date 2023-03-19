import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Button from './Button';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RevealButtonTrigger = ({
  children,
  className
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={classNames('btn-reveal-trigger', className)}>{children}</div>;
};

const RevealButton = () => {
  return <Button className="btn-reveal"></Button>;
};

const RevealDropdown = () => {
  return (
    <Dropdown className="btn-reveal-trigger">
      <Dropdown.Toggle
        variant=""
        size="sm"
        className="dropdown-caret-none btn-reveal notification-dropdown-toggle"
      >
        <FontAwesomeIcon icon="ellipsis" className="fs-10" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default RevealDropdown;
