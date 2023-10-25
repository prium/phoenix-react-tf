import {
  faBars,
  faCircleXmark,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import PhoenixFloatingLabel, {
  PhoenixFloatingLabelProps
} from 'components/base/PhoenixFloatingLabel';
import React from 'react';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';

interface ColumnItemProps extends PhoenixFloatingLabelProps {
  className?: string;
}

const ColumnItem = ({ className, label }: PhoenixFloatingLabelProps) => {
  return (
    <div className={classNames(className, 'd-flex gap-3')}>
      <PhoenixFloatingLabel
        label={label}
        className="flex-1"
        startComponent={<FontAwesomeIcon icon={faBars} />}
        endComponent={
          <button className="btn p-0 lh-1">
            <FontAwesomeIcon className="text-300" icon={faCircleXmark} />
          </button>
        }
      >
        <Form.Control type="text" placeholder="Board Name" />
      </PhoenixFloatingLabel>

      <div>
        <Form.Control
          type="color"
          className="kanban-color-picker"
          // value="#ff0000"
        />
      </div>
    </div>
  );
};

const ColumnForm = () => {
  return (
    <div>
      <p className="mb-4">
        These will be the <b>Columns</b> of your Kanban board. They represent
        discrete stages in work process. Columns can be Edited, Removed,
        Rearranged or Added in future.
      </p>
      <ColumnItem className="mb-5" label="Column 1" />
      <ColumnItem className="mb-5" label="Column 2" />
      <ColumnItem className="mb-5" label="Column 3" />

      <Button
        variant="phoenix-secondary"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        className="w-100 bg-100 fs-9"
        size="lg"
      >
        Add New Column
      </Button>
    </div>
  );
};

export default ColumnForm;
