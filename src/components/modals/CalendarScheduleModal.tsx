import { faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { Schedule } from 'data/calendarEvents';
import { Dispatch, SetStateAction } from 'react';
import { FloatingLabel, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CalendarScheduleModalProps {
  isOpenScheduleModal: boolean;
  setIsOpenScheduleModal: Dispatch<SetStateAction<boolean>>;
  scheduleStartDate?: Date;
  scheduleEndDate?: Date;
  setInitialEvents: Dispatch<SetStateAction<Schedule[]>>;
}

const CalendarScheduleModal = ({
  isOpenScheduleModal,
  setIsOpenScheduleModal,
  scheduleStartDate,
  scheduleEndDate,
  setInitialEvents
}: CalendarScheduleModalProps) => {
  return (
    <Modal
      show={isOpenScheduleModal}
      onHide={() => setIsOpenScheduleModal(false)}
    >
      <Modal.Header className="px-card border-0">
        <div className="w-100 d-flex justify-content-between align-items-start">
          <div>
            <h5 className="mb-0 lh-sm text-1000">Add new</h5>
            <div className="mt-2">
              <Form.Check type="radio" id="event" className="form-check-inline">
                <Form.Check.Input
                  type="radio"
                  name="pricingRadio"
                  defaultChecked
                />
                <Form.Check.Label htmlFor="event">Free</Form.Check.Label>
              </Form.Check>
              <Form.Check type="radio" id="task" className="form-check-inline">
                <Form.Check.Input type="radio" name="pricingRadio" />
                <Form.Check.Label htmlFor="task">Paid</Form.Check.Label>
              </Form.Check>
            </div>
          </div>
          <Button
            className="p-1 fs-10 text-900"
            onClick={() => setIsOpenScheduleModal(false)}
          >
            DISCARD
          </Button>
        </div>
      </Modal.Header>
      <Modal.Body className="p-card py-0">
        <FloatingLabel controlId="event-title" label="Title" className="mb-3">
          <Form.Control type="text" placeholder="Title" />
        </FloatingLabel>
        <FloatingLabel controlId="eventLabel" label="Label" className="mb-5">
          <Form.Select>
            <option value="primary">Business</option>
            <option value="secondary">Personal</option>
            <option value="success">Meeting</option>
            <option value="danger">Birthday</option>
            <option value="info">Report</option>
            <option value="warning">Must attend</option>
          </Form.Select>
        </FloatingLabel>
        <DatePicker
          options={{
            enableTime: true,
            dateFormat: 'Y-m-d H:i',
            defaultDate: scheduleStartDate
          }}
          render={(_, ref) => {
            return (
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Starts at"
                  ref={ref}
                  id="startDatepicker"
                />
                <label htmlFor="startDatepicker" className="ps-6">
                  Starts at
                </label>
              </Form.Floating>
            );
          }}
        />
        <DatePicker
          value={scheduleEndDate}
          options={{ enableTime: true, dateFormat: 'Y-m-d H:i' }}
          render={(_, ref) => {
            return (
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Ends at"
                  ref={ref}
                  id="endDatepicker"
                />
                <label htmlFor="endDatepicker" className="ps-6">
                  Ends at
                </label>
              </Form.Floating>
            );
          }}
        />
        <Form.Check>
          <Form.Check.Input type="checkbox" id="all-day" />
          <Form.Check.Label htmlFor="all-day">All day event</Form.Check.Label>
        </Form.Check>
        <div className="py-5">
          <FloatingLabel controlId="description" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Description"
              style={{ height: '128px' }}
            />
          </FloatingLabel>
        </div>
        <FloatingLabel
          controlId="repetition"
          label="Repetition"
          className="mb-3"
        >
          <Form.Select>
            <option value="noRepeat">No Repeat</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="DailyExceptHolidays">Daily (except holidays)</option>
            <option value="custom">Custom</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel controlId="reminder" label="Reminder" className="mb-3">
          <Form.Select>
            <option value="1">30 minutes earlier</option>
            <option value="2">8 am on the day</option>
            <option value="3">8 am on the day before</option>
            <option value="4">2 days earlier</option>
            <option value="5">a week earlier</option>
          </Form.Select>
        </FloatingLabel>
        <Button
          variant="link"
          className="p-0 mb-3"
          startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
        >
          Add Reminder
        </Button>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between align-items-center border-0">
        <Link to="/apps/events/create-an-event" className="me-3 fs-9 text-900">
          More options
          <FontAwesomeIcon icon={faAngleRight} className="ms-1 fs-10" />
        </Link>
        <Button variant="primary" type="submit" className="px-4">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CalendarScheduleModal;
