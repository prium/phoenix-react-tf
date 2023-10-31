import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { CalendarView, useCalendar } from 'providers/CalendarProvider';
import { ButtonGroup, Col, Row } from 'react-bootstrap';

const CalendarHeader = () => {
  const {
    calendarApi,
    calendarTitle,
    setCalendarTitle,
    calendarView,
    setCalendarView
  } = useCalendar();

  const handleUpdate = (type: string) => {
    if (calendarApi) {
      type === 'next'
        ? calendarApi.next()
        : type === 'prev'
        ? calendarApi.prev()
        : type === 'today' && calendarApi?.today();
      setCalendarTitle(calendarApi.view.title);
    }
  };

  const handleCalendarView = (viewType: CalendarView) => {
    if (calendarApi) {
      calendarApi.changeView(viewType);
      setCalendarView(viewType);
      setCalendarTitle(calendarApi.view.title);
    }
  };

  return (
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 border-y border-200">
      <Row className="py-3 gy-3 gx-0">
        <Col xs={6} md={4} className="order-1 d-flex align-items-center">
          <Button
            onClick={() => handleUpdate('today')}
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
            onClick={() => handleUpdate('prev')}
            className="icon-item icon-item-sm shadow-none text-1100 p-0"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <h3 className="px-3 text-1100 fw-semi-bold mb-0">{calendarTitle}</h3>
          <Button
            onClick={() => handleUpdate('next')}
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
                active: calendarView === 'dayGridMonth'
              })}
            >
              Month
            </Button>
            <Button
              onClick={() => handleCalendarView('timeGridWeek')}
              variant="phoenix-secondary"
              className={classNames({
                active: calendarView === 'timeGridWeek'
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
