import { CalendarApi } from '@fullcalendar/core';
import { EventImpl } from '@fullcalendar/core/internal';
import events, { Event, Schedule } from 'data/calendarEvents';
import {
  useState,
  PropsWithChildren,
  useContext,
  Dispatch,
  SetStateAction,
  createContext
} from 'react';

export type CalendarView = 'dayGridMonth' | 'timeGridWeek';

interface CalendarProps {
  calendarTitle: string;
  setCalendarTitle: Dispatch<SetStateAction<string>>;
  calendarView: CalendarView;
  setCalendarView: Dispatch<SetStateAction<CalendarView>>;
  isOpenScheduleModal: boolean;
  setIsOpenScheduleModal: Dispatch<SetStateAction<boolean>>;
  calendarApi: CalendarApi | null;
  setCalendarApi: Dispatch<SetStateAction<CalendarApi | null>>;
  setInitialEvents: Dispatch<SetStateAction<(Event | Schedule)[]>>;
  initialEvents: (Event | Schedule)[];
  isOpenEventModal: boolean;
  setIsOpenEventModal: Dispatch<SetStateAction<boolean>>;
  modalEventContent: EventImpl | null;
  setModalEventContent: Dispatch<SetStateAction<EventImpl | null>>;
  scheduleStartDate: Date | string;
  setScheduleStartDate: Dispatch<SetStateAction<Date | string>>;
  scheduleEndDate: Date | string;
  setScheduleEndDate: Dispatch<SetStateAction<Date | string>>;
}

export const CalendarContext = createContext({} as CalendarProps);

const eventList = events.reduce(
  (acc, val) =>
    val.schedules ? acc.concat(val.schedules.concat(val)) : acc.concat(val),
  [] as (Event | Schedule)[]
);

const CalendarProvider = ({ children }: PropsWithChildren) => {
  const [calendarApi, setCalendarApi] = useState<CalendarApi | null>(null);
  const [calendarTitle, setCalendarTitle] = useState('');
  const [calendarView, setCalendarView] =
    useState<CalendarView>('dayGridMonth');
  const [initialEvents, setInitialEvents] =
    useState<(Event | Schedule)[]>(eventList);
  const [isOpenEventModal, setIsOpenEventModal] = useState(false);
  const [modalEventContent, setModalEventContent] = useState<EventImpl | null>(
    null
  );
  const [isOpenScheduleModal, setIsOpenScheduleModal] = useState(false);
  const [scheduleStartDate, setScheduleStartDate] = useState<Date | string>('');
  const [scheduleEndDate, setScheduleEndDate] = useState<Date | string>('');
  return (
    <CalendarContext.Provider
      value={{
        calendarApi,
        setCalendarApi,
        calendarTitle,
        setCalendarTitle,
        calendarView,
        setCalendarView,
        isOpenScheduleModal,
        setIsOpenScheduleModal,
        initialEvents,
        setInitialEvents,
        isOpenEventModal,
        setIsOpenEventModal,
        modalEventContent,
        setModalEventContent,
        scheduleStartDate,
        setScheduleStartDate,
        scheduleEndDate,
        setScheduleEndDate
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);

export default CalendarProvider;
