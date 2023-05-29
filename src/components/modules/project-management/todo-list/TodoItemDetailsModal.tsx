import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UilBellSchool, UilTagAlt } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';
import { SubTaskItem, ToDoItem, attachments, subTasks } from 'data/project-management/todoListData';
import { snakeCase } from 'helpers/utils';
import React from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import FileListItem from './FileListItem';

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
      <Modal.Body className="bg-100 px-6 py-0 rounded-bottom">
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

              <div className="mb-3">
                <h4 className="mb-3">Files</h4>
                {attachments.map((attachment, index) => (
                  <FileListItem
                    key={attachment.name}
                    attachment={attachment}
                    className={classNames({
                      'border-top': index === 0
                    })}
                  />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} lg={5}>
            <div className="py-6">
              <h4 className="mb-4 text-black">Others Information</h4>
              <h5 className="text-1000 mb-2">Status</h5>
              <Form.Select className="mb-4">
                <option selected>Select</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="closed">Closed</option>
              </Form.Select>
              <h5 className="text-1000 mb-2">Due Date</h5>
              <div className="mb-4">
                <DatePicker placeholder="Set the due date" />
              </div>
              <h5 className="text-1000 mb-2">Reminder</h5>
              <div className="mb-4">
                <DatePicker
                  placeholder="Set the due date"
                  options={{ noCalendar: true, enableTime: true, dateFormat: 'H:i' }}
                  icon={<UilBellSchool className="flatpickr-icon text-700" size={16} />}
                />
              </div>
              <h5 className="text-1000 mb-2">Tag</h5>
              <ReactSelect
                options={[
                  {
                    value: 'massachusetts_institute_of_technology',
                    label: 'Massachusetts Institute of Technology'
                  },
                  { value: 'university_of_chicago', label: 'University of Chicago' },
                  { value: 'gsas_open_labs_at_harvard', label: 'GSAS Open Labs At Harvard' },
                  {
                    value: 'california_institute_of_technology',
                    label: 'California Institute of Technology'
                  }
                ]}
                className="mb-6"
                isMulti
                placeholder="Select organizer"
                icon={<UilTagAlt className="react-select-icon text-700" size={16} />}
              />

              <div className="text-end mb-9">
                <Button variant="phoenix-danger">Delete Task</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default TodoItemDetailsModal;
