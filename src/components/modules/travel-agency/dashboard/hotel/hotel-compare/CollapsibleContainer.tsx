import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import { Collapse } from 'react-bootstrap';

type Props = {
  collapseTitle: string;
  id: string;
  children: React.ReactElement;
  classNames?: string;
};

const CollapsibleContainer = ({
  collapseTitle,
  children,
  id,
  classNames
}: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <Button
        variant={''}
        className={`p-4 d-flex flex-between-center collapse-indicator text-body-highlight bg-body-highlight w-100 position-sticky start-0 ${
          open ? 'collapsed' : ''
        } ${classNames ? classNames : ''}`}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <h4 className="mb-0">{collapseTitle}</h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="toggle-icon text-body"
        />
      </Button>
      <Collapse in={open}>
        <div id={id}>{children}</div>
      </Collapse>
    </>
  );
};

export default CollapsibleContainer;
