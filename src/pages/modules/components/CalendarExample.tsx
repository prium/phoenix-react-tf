import FullCalendar from 'components/base/FullCalendar';
import CalendarProvider from 'providers/CalendarProvider';
import React from 'react';

const CalendarExample = () => {
  return (
    <CalendarProvider>
      <FullCalendar
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        buttonText={{
          month: 'Month',
          week: 'Week',
          day: 'Day',
          today: 'Today'
        }}
      />
    </CalendarProvider>
  );
};

export default CalendarExample;
