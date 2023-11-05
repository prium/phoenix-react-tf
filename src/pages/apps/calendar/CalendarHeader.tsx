import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { CalendarView, useCalendar } from 'providers/CalendarProvider';
import { ButtonGroup, Col, Row } from 'react-bootstrap';
import { SET_CALENDAR_STATE } from 'reducers/CalendarReducer';

const CalendarHeader = () => {
  const { calendarApi, view, calendarDispatch } = useCalendar();

  const handleCalendarView = (viewType: CalendarView) => {
    if (calendarApi) {
      calendarApi.changeView(viewType);
      calendarDispatch({
        type: SET_CALENDAR_STATE,
        payload: {
          view: viewType
        }
      });
    }
  };

  return (
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 border-y border-200">
      <Row className="py-3 gy-3 gx-0">
        <Col xs={6} md={4} className="order-1 d-flex align-items-center">
          <Button
            onClick={() => calendarApi?.today()}
            variant="phoenix-primary"
            size="sm"
            className="px-4"
          >
            Today
          </Button>
        </Col>
        <Col
          xs={12}
          md={4}
          className="order-md-1 d-flex align-items-center justify-content-center"
        >
          <Button
            onClick={() => calendarApi?.prev()}
            className="icon-item icon-item-sm shadow-none text-1100 p-0"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          {calendarApi && (
            <h3 className="px-3 text-1100 fw-semi-bold mb-0">
              {calendarApi.view.title}
            </h3>
          )}
          <Button
            onClick={() => calendarApi?.next()}
            className="icon-item icon-item-sm shadow-none text-1100 p-0"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </Col>
        <Col
          xs={6}
          md={4}
          className="ms-auto order-1 d-flex justify-content-end"
        >
          <ButtonGroup size="sm">
            <Button
              onClick={() => handleCalendarView('dayGridMonth')}
              variant="phoenix-secondary"
              className={classNames({
                active: view === 'dayGridMonth'
              })}
            >
              Month
            </Button>
            <Button
              onClick={() => handleCalendarView('timeGridWeek')}
              variant="phoenix-secondary"
              className={classNames({
                active: view === 'timeGridWeek'
              })}
            >
              Week
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

export default CalendarHeader;
