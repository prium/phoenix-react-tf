import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ButtonGroup, Col, Row } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { CalendarApi } from '@fullcalendar/core';
import events, { Event, Schedule } from 'data/calendarEvents';
import Button from 'components/base/Button';
import { days, monthsShort } from 'data/commonData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
  faSync
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const Calendar = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const [calendarApi, setCalendarApi] = useState<CalendarApi | null>(null);
  const [calendarTitle, setCalendarTitle] = useState('');
  const [calendarView, setCalendarView] = useState('dayGridMonth');
  const d = new Date();
  useEffect(() => {
    const api = calendarRef.current?.getApi();
    if (api) {
      setCalendarApi(api);
      setCalendarTitle(api.view.title);
    }
  }, []);

  const eventList = events.reduce(
    (acc: Schedule[], val: Event) =>
      val.schedules ? acc.concat(val.schedules.concat(val)) : acc.concat(val),
    []
  );

  const updateDay = (day: number) => {
    return days[day];
  };

  const updateDate = (date: number, month: number, year: number) => {
    return `${date} ${monthsShort[month]}, ${year}`;
  };

  const handleUpdate = (type: string) => {
    if (calendarApi) {
      type === 'next'
        ? calendarApi?.next()
        : type === 'prev'
        ? calendarApi?.prev()
        : type === 'today' && calendarApi?.today();
      setCalendarTitle(calendarApi.view.title);
    }
  };

  const handleCalendarView = (viewType: string) => {
    if (calendarApi) {
      calendarApi?.changeView(viewType);
      setCalendarView(viewType);
      setCalendarTitle(calendarApi.view.title);
    }
  };

  return (
    <div>
      <Row className="g-0 mb-4 align-items-center">
        <Col xs={5} md={6}>
          <h4 className="mb-0 text-1100 fw-bold fs-md-6">
            <span className="calendar-day d-block d-md-inline mb-1">
              {updateDay(new Date().getDay())}
            </span>
            <span className="px-3 fw-thin text-400 d-none d-md-inline">|</span>
            <span>
              {updateDate(d.getDate(), d.getMonth(), d.getFullYear())}
            </span>
          </h4>
        </Col>
        <Col xs={7} md={6} className="d-flex justify-content-end">
          <Button
            variant="link"
            className="text-900 px-0 me-2 me-md-4"
            startIcon={<FontAwesomeIcon icon={faSync} className="fs-10 me-2" />}
          >
            <span className="d-none d-md-inline">Sync Now</span>
          </Button>
          <Button
            variant="primary"
            size="sm"
            startIcon={<FontAwesomeIcon icon={faPlus} className="fs-10 me-2" />}
          >
            Add new task
          </Button>
        </Col>
      </Row>
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
            <h3 className="px-3 text-1100 fw-semi-bold mb-0">
              {calendarTitle}
            </h3>
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
      <div className="mt-6 mb-9">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView={calendarView}
          headerToolbar={false}
          dayMaxEvents={3}
          height={800}
          stickyHeaderDates={false}
          views={{
            week: {
              eventLimit: 3
            }
          }}
          eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: true
          }}
          events={eventList}
        />
      </div>
    </div>
  );
};

export default Calendar;
