import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RevealButtonTrigger = ({
  children,
  className
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={classNames('btn-reveal-trigger', className)}>{children}</div>;
};

const RevealDropdown = () => {
  return (
    <Dropdown className="position-static hover-actions" align="end">
      <Dropdown.Toggle
        variant=""
        size="sm"
        className="btn-reveal dropdown-caret-none transition-none"
      >
        <FontAwesomeIcon icon="ellipsis" className="fs-10" />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end" className="py-2">
        <Dropdown.Item eventKey="1">View</Dropdown.Item>
        <Dropdown.Item eventKey="2">Export</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4" className="text-danger">
          Remove
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default RevealDropdown;
