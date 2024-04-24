import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

export const SimpleDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="phoenix-secondary"
        size="sm"
        className="bg-body-emphasis bg-body-hover dropdown-caret-none"
      >
        <FontAwesomeIcon icon={faEllipsisH} className="10" />
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
