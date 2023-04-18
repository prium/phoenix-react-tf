import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import React, { useState } from 'react';
import { Collapse, Form } from 'react-bootstrap';

const CheckboxItem = ({ name, label, value }: { name: string; label: string; value: string }) => {
  return (
    <Form.Check type="checkbox" id={value} className="mb-0">
      <Form.Check.Input type="checkbox" value={value} name={name} className="mt-0" />
      <Form.Check.Label className="d-block lh-sm fs-8 text-900 fw-normal mb-0">
        {label}
      </Form.Check.Label>
    </Form.Check>
  );
};

const FilterItemsCollapse = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        variant=""
        className={classNames('px-0 d-block collapse-indicator w-100', {
          collapsed: !open
        })}
      >
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="fs-8 text-1000">Availability</div>
          <FontAwesomeIcon icon="angle-up" className="toggle-icon text-500" />
        </div>
      </Button>
      <Collapse in={open}>
        <div className="mb-2">
          <CheckboxItem name="availability" value="in_stock" label="In stock" />
          <CheckboxItem name="availability" value="prebook" label="Pre-book" />
          <CheckboxItem name="availability" value="out_of_stock" label="Out of stock" />
        </div>
      </Collapse>
    </>
  );
};

export default FilterItemsCollapse;
