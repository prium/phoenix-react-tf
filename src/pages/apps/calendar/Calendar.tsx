import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Col, Row } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { CalendarApi, Calendar as CalendarApiType } from '@fullcalendar/core';
import events, { Event, Schedule } from 'data/calendarEvents';

const Calendar = () => {
  // const calendarRef = useRef<FullCalendar>(null);
  // const [calendarApi, setCalendarApi] = useState<CalendarApi | null>(null);
  // useEffect(() => {
  //   const api = calendarRef.current?.getApi();
  //   if (api) {
  //     setCalendarApi(api);
  //   }
  // }, []);

  const eventList = events.reduce(
    (acc: Schedule[], val: Event) =>
      val.schedules ? acc.concat(val.schedules.concat(val)) : acc.concat(val),
    []
  );

  const updateDay = (day: number) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    return days[day];
  };

  return (
    <div>
      <Row className="g-0 mb-4 align-items-center">
        <Col xs={6} md={6}>
          <h4 className="mb-0 text-1100 fw-bold fs-md-6">
            <span className="calendar-day d-block d-md-inline mb-1">
              {updateDay(new Date().getDay())}
            </span>
            <span className="px-3 fw-thin text-400 d-none d-md-inline">|</span>
            {/* <span>{calendarApi}</span> */}
          </h4>
        </Col>
      </Row>
      <FullCalendar
        // ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
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
  );
};

export default Calendar;
