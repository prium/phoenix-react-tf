import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useEffect, useRef } from 'react';
import { EventClickArg } from '@fullcalendar/core';
import CalendarAddNewEventModal from 'components/modals/CalendarAddNewEventModal';
import { useCalendar } from 'providers/CalendarProvider';
import CalendarTop from './CalendarTop';
import CalendarHeader from './CalendarHeader';
import CalendarEventModal from 'components/modals/CalendarEventModal';
import { useAppContext } from 'providers/AppProvider';
import {
  HANDLE_SELECT,
  INITIALIZE_CALENDAR,
  SET_CALENDAR_STATE
} from 'reducers/CalendarReducer';

const Calendar = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const {
    config: { isRTL }
  } = useAppContext();

  const { view, events, calendarDispatch } = useCalendar();

  useEffect(() => {
    const api = calendarRef.current?.getApi();
    if (api) {
      calendarDispatch({ type: INITIALIZE_CALENDAR, payload: api });
    }
  }, []);

  const handleEventClick = (info: EventClickArg) => {
    if (info.event.url) {
      window.open(info.event.url);
      info.jsEvent.preventDefault();
    } else {
      calendarDispatch({
        type: SET_CALENDAR_STATE,
        payload: {
          selectedEvent: info.event
        }
      });
    }
  };

  return (
    <div>
      <CalendarTop />
      <CalendarHeader />
      <div className="mt-6 mb-9">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={view}
          headerToolbar={false}
          dayMaxEvents={3}
          height={800}
          stickyHeaderDates={false}
          editable
          selectable
          selectMirror
          direction={isRTL ? 'rtl' : 'ltr'}
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
          select={info => {
            calendarDispatch({
              type: HANDLE_SELECT,
              payload: info
            });
          }}
          events={events}
          eventClick={handleEventClick}
        />
      </div>
      <CalendarEventModal />
      <CalendarAddNewEventModal />
    </div>
  );
};

export default Calendar;
