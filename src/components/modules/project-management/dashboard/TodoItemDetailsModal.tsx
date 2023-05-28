import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { SubTaskItem, ToDoItem, subTasks } from 'data/project-management/todoListData';
import { snakeCase } from 'helpers/utils';
import React from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';

interface TodoItemDetailsModalProps {
  show: boolean;
  handleClose: () => void;
  item: ToDoItem;
}

const SubTask = ({ task, className }: { task: SubTaskItem; className?: string }) => {
  return (
    <div
      className={classNames(
        className,
        'd-flex flex-between-center hover-actions-trigger border-300 py-3 border-bottom'
      )}
    >
      <Form.Check
        type="checkbox"
        id={snakeCase(task.task)}
        className="mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto"
      >
        <Form.Check.Input type="checkbox" className="form-check-line-through mt-0 me-3" />
        <Form.Check.Label className="mb-0 fs-8"> {task.task}</Form.Check.Label>
      </Form.Check>

      <div className="hover-actions end-0">
        <Button size="sm" variant="" className="me-1 text-700 px-0 me-3">
          <FontAwesomeIcon icon="pencil" className="fs-10" />
        </Button>
        <Button size="sm" variant="" className="me-1 text-700 px-0">
          <FontAwesomeIcon icon="xmark" className="fs-8" />
        </Button>
      </div>
    </div>
  );
};

const TodoItemDetailsModal = ({ show, handleClose, item }: TodoItemDetailsModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header className="modal-header px-6 py-5 border-300 pe-sm-5 px-md-6 dark__bg-1100">
        <h3 className="text-1000 fw-bolder mb-0">{item.task}</h3>
        <Button
          variant="phoenix-secondary"
          onClick={handleClose}
          className="btn-icon btn-icon-xl flex-shrink-0"
        >
          <FontAwesomeIcon icon="xmark" />
        </Button>
      </Modal.Header>
      <Modal.Body className="bg-100 px-6 py-0">
        <Row className="gx-14">
          <Col xs={12} lg={7} className="border-end-lg border-300">
            <div className="py-6">
              <div className="mb-7">
                <div className="d-flex align-items-center mb-3">
                  <h4 className="text-900 me-3">Description</h4>
                  <Button variant="link" className="text-decoration-none p-0">
                    <FontAwesomeIcon icon="pen" />
                  </Button>
                </div>
                <p className="text-1000 mb-0">
                  The female circus horse-rider is a recurring subject in Chagall’s work. In 1926
                  the art dealer Ambroise Vollard invited Chagall to make a project based on the
                  circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard
                  lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work.
                  In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on
                  the circus.
                </p>
              </div>
              <div className="mb-7">
                <h4 className="mb-3">Subtasks</h4>
                <div className="mb-3">
                  {subTasks.map((subTask, index) => (
                    <SubTask
                      task={subTask}
                      className={classNames({
                        'border-top': index === 0
                      })}
                    />
                  ))}
                </div>
                <Button variant="link" className="fw-bold fs-9 text-decoration-none p-0">
                  <FontAwesomeIcon icon="plus" className="me-1" />
                  Add subtask
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={5}>
            <div className="py-6">
              <h4 className="mb-4 text-black">Others Information</h4>
              <h5 className="text-1000 mb-2">Status</h5>
              <Form.Select className="mb-4">
                <option selected>Select</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </Form.Select>
              <h5 className="text-1000 mb-2">Due Date</h5>
              <div className="flatpickr-input-container mb-4">
                <input
                  className="form-control datetimepicker ps-6 flatpickr-input"
                  type="text"
                  placeholder="Set the due date"
                  data-options='{"disableMobile":true}'
                />
                <span className="uil uil-calendar-alt flatpickr-icon text-700" />
              </div>
              <h5 className="text-1000 mb-2">Reminder</h5>
              <div className="flatpickr-input-container mb-4">
                <div className="flatpickr-wrapper">
                  <input
                    className="form-control datetimepicker ps-6 flatpickr-input"
                    type="text"
                    placeholder="Reminder"
                    data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true,"static":true}'
                  />
                  <div
                    className="flatpickr-calendar hasTime noCalendar animate static"
                    tabIndex={-1}
                  >
                    <div className="flatpickr-time" tabIndex={-1}>
                      <div className="numInputWrapper">
                        <input
                          className="numInput flatpickr-hour"
                          type="number"
                          aria-label="Hour"
                          tabIndex={-1}
                          step={1}
                          min={1}
                          max={12}
                          maxLength={2}
                        />
                        <span className="arrowUp" />
                        <span className="arrowDown" />
                      </div>
                      <span className="flatpickr-time-separator">:</span>
                      <div className="numInputWrapper">
                        <input
                          className="numInput flatpickr-minute"
                          type="number"
                          aria-label="Minute"
                          tabIndex={-1}
                          step={5}
                          min={0}
                          max={59}
                          maxLength={2}
                        />
                        <span className="arrowUp" />
                        <span className="arrowDown" />
                      </div>
                      <span className="flatpickr-am-pm" title="Click to toggle" tabIndex={-1}>
                        PM
                      </span>
                    </div>
                  </div>
                </div>
                <span className="uil uil-bell-school flatpickr-icon text-700" />
              </div>
              <h5 className="text-1000 mb-2">Tag</h5>
              <div className="choices-select-container mb-6">
                <div
                  className="choices"
                  data-type="select-multiple"
                  role="combobox"
                  aria-autocomplete="list"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="choices__inner">
                    <select
                      className="form-select choices__input"
                      data-choices="data-choices"
                      // multiple="multiple"
                      data-options='{"removeItemButton":true,"placeholder":true}'
                      hidden
                      tabIndex={-1}
                      data-choice="active"
                    />
                    <div className="choices__list choices__list--multiple" />
                    {/* <input
                      type="text"
                      className="choices__input choices__input--cloned"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-label="Select organizer..."
                      placeholder="Select organizer..."
                      style={{ minWidth: '20ch', width: '1ch' }}
                    /> */}
                  </div>
                  <div className="choices__list choices__list--dropdown" aria-expanded="false">
                    <div className="choices__list" aria-multiselectable="true" role="listbox">
                      <div
                        id="choices--qtpz-item-choice-1"
                        className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                        role="option"
                        data-choice
                        data-id={1}
                        data-value="California Institute of Technology"
                        data-select-text
                        data-choice-selectable
                        aria-selected="true"
                      >
                        California Institute of Technology
                      </div>
                      <div
                        id="choices--qtpz-item-choice-2"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice
                        data-id={2}
                        data-value="GSAS Open Labs At Harvard"
                        data-select-text
                        data-choice-selectable
                      >
                        GSAS Open Labs At Harvard
                      </div>
                      <div
                        id="choices--qtpz-item-choice-3"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice
                        data-id={3}
                        data-value="Massachusetts Institute of Technology"
                        data-select-text
                        data-choice-selectable
                      >
                        Massachusetts Institute of Technology
                      </div>
                      <div
                        id="choices--qtpz-item-choice-5"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice
                        data-id={5}
                        data-value="University of Chicago"
                        data-select-text
                        data-choice-selectable
                      >
                        University of Chicago
                      </div>
                    </div>
                  </div>
                </div>
                <span className="uil uil-tag-alt choices-icon text-700" style={{ top: '26%' }} />
              </div>
              <div className="text-end mb-9">
                <button className="btn btn-phoenix-danger">Delete Task</button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoItemDetailsModal;
