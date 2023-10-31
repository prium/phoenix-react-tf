import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useEffect, useRef } from 'react';
import { EventClickArg } from '@fullcalendar/core';
import CalendarScheduleModal from 'components/modals/CalendarScheduleModal';
import { useCalendar } from 'providers/CalendarProvider';
import CalendarTop from './CalendarTop';
import CalendarHeader from './CalendarHeader';
import CalendarEventModal from 'components/modals/CalendarEventModal';
import { useAppContext } from 'providers/AppProvider';

const Calendar = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const {
    config: { isRTL }
  } = useAppContext();

  const {
    setCalendarApi,
    calendarView,
    setCalendarTitle,
    setIsOpenScheduleModal,
    setScheduleStartDate,
    setScheduleEndDate,
    setModalEventContent,
    setIsOpenEventModal,
    initialEvents
  } = useCalendar();

  useEffect(() => {
    const api = calendarRef.current?.getApi();
    if (api) {
      setCalendarApi(api);
      setCalendarTitle(api.view.title);
    }
  }, []);

  const handleEventClick = (info: EventClickArg) => {
    if (info.event.url) {
      window.open(info.event.url);
      info.jsEvent.preventDefault();
    } else {
      setModalEventContent(info.event);
      setIsOpenEventModal(true);
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
          initialView={calendarView}
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
            setIsOpenScheduleModal(true);
            setScheduleStartDate(info.start);
            setScheduleEndDate(info.end);
          }}
          // @ts-ignore
          events={initialEvents}
          eventClick={handleEventClick}
        />
      </div>
      <CalendarEventModal />
      <CalendarScheduleModal />
    </div>
  );
};

export default Calendar;
