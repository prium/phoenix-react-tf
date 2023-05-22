import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RevealDropdownTriggerProps {
  className?: string;
}
interface RevealDropdownProps extends RevealDropdownTriggerProps {
  btnClassName?: string;
}

export const RevealDropdownTrigger = ({
  children,
  className
}: PropsWithChildren<RevealDropdownTriggerProps>) => {
  return <div className={classNames('btn-reveal-trigger', className)}>{children}</div>;
};

const RevealDropdown = ({
  children,
  className,
  btnClassName
}: PropsWithChildren<RevealDropdownProps>) => {
  return (
    <Dropdown className={classNames(className)} align="end">
      <Dropdown.Toggle
        variant=""
        size="sm"
        className={classNames(btnClassName, 'btn-reveal dropdown-caret-none transition-none')}
      >
        <FontAwesomeIcon icon="ellipsis" className="fs-10" />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end" className="py-2">
        {children}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default RevealDropdown;
