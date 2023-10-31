import {
  faAngleRight,
  faPencilAlt,
  faTimes,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Schedule } from 'data/calendarEvents';
import dayjs from 'dayjs';
import { useCalendar } from 'providers/CalendarProvider';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CalendarEventModal = () => {
  const {
    modalEventContent,
    isOpenEventModal,
    setIsOpenEventModal,
    setInitialEvents,
    initialEvents
  } = useCalendar();

  const handleRemove = () => {
    modalEventContent?.remove;
    const updatedEvents = initialEvents.filter(
      item => item.id !== Number(modalEventContent?._def.publicId)
    );
    setInitialEvents(updatedEvents);
    setIsOpenEventModal(false);
  };

  return (
    <Modal
      centered
      show={isOpenEventModal}
      onHide={() => setIsOpenEventModal(false)}
    >
      <Modal.Header className="ps-card border-bottom">
        <div>
          <Modal.Title className="modal-title text-1000 mb-0">
            {modalEventContent?.title}
          </Modal.Title>
          {modalEventContent?.extendedProps.organizer && (
            <p className="mb-0 fs-9 mt-1">
              by{' '}
              <Link to="#!">{modalEventContent.extendedProps.organizer}</Link>
            </p>
          )}
        </div>
        <Button className="p-1" onClick={() => setIsOpenEventModal(false)}>
          <FontAwesomeIcon icon={faTimes} className="fs-8" />
        </Button>
      </Modal.Header>
      <Modal.Body className="px-card pb-card pt-1 fs-9">
        {modalEventContent?.extendedProps.description && (
          <div className="mt-3 border-bottom pb-3">
            <h5 className="mb-0 text-800">Description</h5>
            <p className="mb-0 mt-2">
              {modalEventContent.extendedProps.description
                .split(' ')
                .slice(0, 30)
                .join(' ')}
            </p>
          </div>
        )}
        <div className="mt-4 ${event.extendedProps.location ? 'border-bottom pb-3' : ''}">
          <h5 className="mb-0 text-800">Date and Time</h5>
          <p className="mb-1 mt-2">
            {dayjs(modalEventContent?.start).format(
              'dddd, MMMM D, YYYY, h:mm A'
            )}
            {modalEventContent?.end &&
              ` – ${
                dayjs &&
                dayjs(modalEventContent?.end)
                  .subtract(1, 'day')
                  .format('dddd, MMMM D, YYYY, h:mm A')
              }`}
          </p>
        </div>
        {modalEventContent?.extendedProps.location && (
          <div className="mt-4 ">
            <h5 className="mb-0 text-800">Location</h5>
            <p
              className="mb-0 mt-2"
              dangerouslySetInnerHTML={{
                __html: modalEventContent.extendedProps.location
              }}
            ></p>
          </div>
        )}
        {modalEventContent?.extendedProps.schedules && (
          <div className="mt-3">
            <h5 className="mb-0 text-800">Schedule</h5>
            <ul className="list-unstyled timeline mt-2 mb-0">
              {modalEventContent.extendedProps.schedules.map(
                (schedule: Schedule) => (
                  <li key={schedule.title}>{schedule.title}</li>
                )
              )}
            </ul>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end px-card pt-0 border-top-0">
        <Button
          as={Link}
          to="/apps/events/create-an-event"
          variant="phoenix-secondary"
          size="sm"
          startIcon={<FontAwesomeIcon icon={faPencilAlt} className="fs-10" />}
        >
          Edit
        </Button>
        <Button
          onClick={handleRemove}
          variant="phoenix-danger"
          size="sm"
          startIcon={<FontAwesomeIcon icon={faTrash} className="fs-9" />}
        >
          Delete
        </Button>
        <Button
          as={Link}
          to="/apps/events/event-detail"
          variant="primary"
          size="sm"
          endIcon={<FontAwesomeIcon icon={faAngleRight} className="fs-10" />}
        >
          See more details
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CalendarEventModal;
