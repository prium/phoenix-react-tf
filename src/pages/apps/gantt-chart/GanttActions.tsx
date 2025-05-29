import {
  Row,
  Col,
  Button,
  FormCheck,
  FormSelect,
  Modal,
  Form
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faFilter,
  faGear,
  faClock,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { gantt } from 'dhtmlx-gantt';
import DatePicker from 'components/base/DatePicker';

const GanttChartActions = ({ setCurrentView }) => {
  const [show, setShow] = useState(false);
  const [taskName, setTaskName] = useState('New Task');
  const [taskStart, setTaskStart] = useState<Date | null>(
    new Date('May 20, 2024')
  );
  const [taskDuration, setTaskDuration] = useState(2);

  const resetForm = () => {
    setTaskName('New Task');
    setTaskStart(new Date('May 20, 2024'));
    setTaskDuration(2);
  };

  const handleCreateTask = () => {
    const duration = parseInt(taskDuration, 10);
    console.log({ taskName });
    console.log({ taskStart });
    console.log({ duration });

    if (taskName && taskStart instanceof Date && !isNaN(duration)) {
      const taskEnd = gantt.calculateEndDate({
        start_date: taskStart,
        duration,
        task: {}
      });

      const newTask = {
        text: taskName,
        start_date: taskStart,
        end_date: taskEnd,
        duration
      };

      gantt.addTask(newTask);
      setShow(false);
      resetForm();
    } else {
      console.warn('Invalid task input');
    }
  };

  useEffect(() => {
    const id = gantt.attachEvent('onTaskCreated', task => {
      setShow(true);
      if (task.text) setTaskName(task.text);
      if (task.start_date)
        setTaskStart(
          task.start_date instanceof Date
            ? task.start_date
            : new Date(task.start_date)
        );
      return false; // prevent auto creation
    });

    return () => gantt.detachEvent(id);
  }, []);

  return (
    <>
      <div className="gantt-header p-4 px-lg-6 py-sm-3">
        <Row className="gx-0 gy-3 justify-content-between">
          <Col md="auto" className="d-flex align-items-center">
            <h3 className="mb-0">Gantt Chart</h3>
            <Button
              className="btn-sm ms-auto ms-md-3"
              variant="primary"
              onClick={() => setShow(true)}
            >
              <FontAwesomeIcon icon={faPlus} />
              <span className="ms-2 d-md-none d-xl-inline">Add Task</span>
            </Button>
          </Col>

          <Col md="auto">
            <Row className="align-items-center gy-3 gx-0">
              <Col sm="auto">
                <div className="gantt-search-box">
                  {/* Search box placeholder */}
                </div>
              </Col>

              <Col className="d-flex align-items-center ms-sm-auto" xs="auto">
                <div
                  className="border-start d-none d-md-inline ms-md-3"
                  style={{ height: '20px', width: '2px' }}
                />
                <FormCheck
                  type="switch"
                  id="ganttZoomToFit"
                  className="mb-0 ms-sm-3"
                >
                  <FormCheck.Input
                    onChange={e => {
                      const view = e.target.checked ? 'months' : 'days';
                      setCurrentView(view);
                    }}
                  />
                  <FormCheck.Label className="text-nowrap">
                    Auto Fit
                  </FormCheck.Label>
                </FormCheck>

                <FormSelect
                  size="sm"
                  className="ms-3"
                  defaultValue="months"
                  onChange={e => setCurrentView(e.target.value)}
                >
                  <option value="days">Day</option>
                  <option value="weeks">Weekly</option>
                  <option value="months">Monthly</option>
                  <option value="years">Year</option>
                </FormSelect>
              </Col>

              <Col
                className="d-flex align-items-center ms-auto ms-sm-3"
                xs="auto"
              >
                <div
                  className="border-start d-none d-sm-inline me-3"
                  style={{ height: '20px', width: '2px' }}
                />
                <Button
                  variant="link"
                  size="sm"
                  className="text-body px-0 text-nowrap ms-n1"
                  data-bs-toggle="modal"
                  data-bs-target="#ganttTaskFilterModal"
                >
                  <FontAwesomeIcon icon={faFilter} className="fs-9" />
                  <span className="d-none d-xl-inline ms-2">Filter</span>
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="text-body px-0 text-nowrap ms-3"
                  data-bs-toggle="modal"
                  data-bs-target="#ganttOptionsModal"
                >
                  <FontAwesomeIcon icon={faGear} className="fs-9" />
                  <span className="d-none d-xl-inline ms-2">Options</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

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
                value={taskName}
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
                      setTaskStart(Array.isArray(date) ? date[0] : date);
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
                      onChange={e => setTaskDuration(e.target.value)}
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
    </>
  );
};

export default GanttChartActions;
