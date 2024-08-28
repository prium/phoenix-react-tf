import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React, { PropsWithChildren, useState } from 'react';
import { Collapse } from 'react-bootstrap';

interface RoomFilterCollapseProps {
  title: string;
  defaultOpen?: boolean;
}

const RoomFIlterCollapse = ({
  title,
  defaultOpen = true,
  children
}: PropsWithChildren<RoomFilterCollapseProps>) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="example-collapse-text"
        aria-expanded={isOpen}
        className="px-0 py-2 d-flex align-items-center mt-3 collapse-indicator"
      >
        <FontAwesomeIcon
          icon={faCaretDown}
          className="text-body me-2 toggle-icon "
        />
        <h5 className="text-body-highlight">{title}</h5>
      </Button>
      <Collapse in={isOpen}>
        <div className="border-bottom">
          <div className="pb-4">{children}</div>
        </div>
      </Collapse>
    </>
  );
};

export default RoomFIlterCollapse;
