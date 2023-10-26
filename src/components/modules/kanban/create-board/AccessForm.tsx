import Button from 'components/base/Button';
import React, { PropsWithChildren, useState } from 'react';
import { Accordion, Collapse, Form, useAccordionButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CollapseRadioItem = ({
  label,
  id,
  children
}: PropsWithChildren<{ label: string; id: string }>) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Form.Check
        type="radio"
        id={id}
        name="access"
        label={label}
        onChange={e => {
          console.log(e.target.checked);

          if (e.target.checked) {
            setOpen(true);
          } else {
            setOpen(false);
          }
        }}
        // onClick={() => setOpen(!open)}
      />

      <Collapse in={open}>
        <div>
          <>{children}</>
        </div>
      </Collapse>
    </>
  );
};

const CustomToggle = ({
  children,
  label,
  id,
  eventKey
}: PropsWithChildren<{ eventKey: string; label: string; id: string }>) => {
  const [setselectedEventKey, setSetselectedEventKey] = useState('1');
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => console.log({ eventKey })
    // setSetselectedEventKey(eventKey)
  );

  return (
    <div>
      <Form.Check
        type="radio"
        id={id}
        name="access"
        label={label}
        onClick={decoratedOnClick}
      />
    </div>
  );
};

const AccessForm = () => {
  return (
    <div>
      <p className="mb-4">
        Add <b>Members</b> or <b>Guests</b> to your Kanban board. They can add,
        edit, or move tasks in your board. Tasks can also be assigned to them.
        <br />
        <Link className="mb-4" to="#!">
          Learn more
        </Link>
      </p>

      <Accordion defaultActiveKey="0">
        <CustomToggle
          eventKey="0"
          id="anyone"
          label="Anyone with shareable link can access"
        />

        <Accordion.Collapse eventKey="0">
          <p>kjhhjg</p>
        </Accordion.Collapse>

        <CustomToggle
          eventKey="1"
          id="invited"
          label="Only invited people can access"
        />

        <Accordion.Collapse eventKey="1">
          <p>kjikl</p>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
};

export default AccessForm;
