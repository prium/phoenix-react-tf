import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const KanbanCreateBoardForm = () => {
  return (
    <div className="theme-wizard theme-wizard-progress">
      <div className="mt-6 border-bottom-0">
        <p className="mb-4">
          This will be the <b>Name</b> and description of your Kanban board. You
          and other admins can edit the name in future. The name can contain
          letters, numbers &amp; punctuation.{' '}
        </p>
      </div>
      {/* <Form
        id={`${config.formId}1`}
        className={`form ${config.validation ? 'needs-validation' : ''}`}
        noValidate
        data-wizard-form="1"
      >
        <FloatingLabel controlId={`${config.name}-name`} label="BOARD NAME">
          <Form.Control
            type="text"
            name={`${config.name}-name`}
            id={`${config.name}wizard-name`}
            required={config.validation}
            placeholder="Event title"
            defaultValue="New Kanban Board"
          />
        </FloatingLabel>

        <FloatingLabel controlId={`${config.name}-type`} label="BOARD TYPE">
          <Select
            name={`${config.name}-type`}
            id={`${config.name}wizard-type`}
            required={config.validation}
          >
            <option value="" disabled>
              Select event type
            </option>
            <option value="1">technical</option>
            <option value="2">external</option>
            <option value="3">organizational</option>
          </Select>
        </FloatingLabel>

        <FloatingLabel
          controlId={`${config.name}-message`}
          label="DESCRIPTION (OPTIONAL)"
        >
          <TextArea
            placeholder="Leave a comment here"
            name={`${config.name}-message`}
            id={`${config.name}-wizard-des`}
            style={{ height: '128px' }}
          />
        </FloatingLabel>
      </Form> */}
    </div>
  );
};

export default KanbanCreateBoardForm;
