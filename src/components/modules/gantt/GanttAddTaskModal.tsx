import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { gantt } from 'dhtmlx-gantt';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';

const GanttAddTaskModal = ({
  show,
  setShow
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const [taskName, setTaskName] = useState('New Task');
  const [taskStart, setTaskStart] = useState<Date>(new Date('May 20, 2024'));
  const [parentTask, setParentTask] = useState<string | null>(null);
  const [taskDuration, setTaskDuration] = useState(2);
  const resetForm = () => {
    setTaskName('New Task');
    setTaskStart(new Date('May 20, 2024'));
    setTaskDuration(2);
    setParentTask(null);
  };
  const handleCreateTask = () => {
    if (taskName && taskStart instanceof Date && !isNaN(taskDuration)) {
      const taskEnd = gantt.calculateEndDate({
        start_date: taskStart,
        duration: taskDuration
      });

      const newTask = {
        text: taskName,
        start_date: taskStart,
        end_date: taskEnd,
        duration: taskDuration,
        parent: parentTask
      };

      gantt.addTask(newTask);
      setShow(false);
      resetForm();
    } else {
      console.warn('Invalid task input');
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll('[data-gantt-add-subtask]').forEach(item => {
        item.addEventListener('click', () => {
          const parentId = item.getAttribute('id');
          setParentTask(parentId);

          gantt.createTask({
            text: '',
            duration: 3,
            parent: item.getAttribute('id')
          });
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = gantt.attachEvent('onTaskCreated', task => {
      setShow(true);
      if (task.text) setTaskName(task.text);
      if (task.start_date) setTaskStart(task.start_date);
      return false;
    });

    return () => gantt.detachEvent(id);
  }, []);

  return (
    <Modal show={show} centered aria-labelledby="addTaskModalLabel">
      <Modal.Header className="p-4 pb-3 align-items-start border-0 bg-body-highlight">
        <h3 className="mb-0 text-body-highlight">Create New Task</h3>
        <button onClick={() => setShow(false)} className="btn p-1 ms-auto">
          <FontAwesomeIcon icon={faTimes} className="fs-10 btn-close" />
        </button>
      </Modal.Header>

      <Modal.Body className="px-4 bg-body-highlight">
        <Form id="addTaskForm">
          <Form.Group controlId="createTaskName" className="mb-4">
            <Form.Label className="form-label-header mb-2">
              Task name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task name"
              onChange={e => setTaskName(e.target.value)}
            />
          </Form.Group>

          <Row className="g-3">
            <Col xs={7} sm={8}>
              <Form.Group controlId="createTaskStartDate">
                <Form.Label className="form-label-header mb-2">
                  Start Time
                </Form.Label>
                <DatePicker
                  id="createTaskStartDate"
                  onChange={date => {
                    setTaskStart(date[0]);
                  }}
                  options={{
                    defaultDate: taskStart || new Date('May 20, 2024')
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={5} sm={4}>
              <Form.Group controlId="createTaskDuration" className="mb-4">
                <Form.Label className="form-label-header mb-2">
                  Time Duration
                </Form.Label>
                <div className="form-icon-container">
                  <Form.Control
                    type="number"
                    placeholder="Days"
                    className="form-icon-input"
                    value={taskDuration}
                    onChange={e => setTaskDuration(parseInt(e.target.value))}
                  />
                  <FontAwesomeIcon
                    icon={faClock}
                    className="fs-9 form-icon text-body-tertiary"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer className="border-0 px-4 pb-3 bg-body-highlight">
        <Button variant="phoenix-secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button onClick={handleCreateTask} variant="primary">
          Create New Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GanttAddTaskModal;
