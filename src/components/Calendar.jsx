import { useState } from 'react';
import dayjs from 'dayjs';
import CalendarHeader from './CalendarHeader';
import CalendarDays from './CalendarDays';
import CalendarCell from './CalendarCell';

const Calendar = ({ events = [] }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const goToToday = () => {
    setCurrentDate(dayjs());
  };

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDate = startOfMonth.startOf('week');
  const endDate = endOfMonth.endOf('week');
  console.log(startOfMonth)
  const days = [];
  let day = startDate;

  while (day.isBefore(endDate) || day.isSame(endDate)) {
    days.push(day);
    day = day.add(1, 'day');
  }

  const getEventsForDay = (date) => {
    const dateStr = date.format('YYYY-MM-DD');
    const dayEvents = events.filter(event => event.date === dateStr);
    
    return dayEvents.sort((a, b) => {
      const timeA = parseInt(a.startTime.replace(':', ''));
      const timeB = parseInt(b.startTime.replace(':', ''));
      return timeA - timeB;
    });
  };

  const hasConflicts = (events) => {
    for (let i = 0; i < events.length; i++) {
      for (let j = i + 1; j < events.length; j++) {
        const eventA = events[i];
        const eventB = events[j];
        
        const startA = convertToMinutes(eventA.startTime);
        const endA = convertToMinutes(eventA.endTime);
        const startB = convertToMinutes(eventB.startTime);
        const endB = convertToMinutes(eventB.endTime);
        
        if (startA < endB && startB < endA) {
          return true;
        }
      }
    }
    return false;
  };

  const convertToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  return (
    <div className="calendar">
      <CalendarHeader
        currentDate={currentDate}
        onPrevious={goToPreviousMonth}
        onNext={goToNextMonth}
        onToday={goToToday}
      />

      <CalendarDays />

      <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
        {days.map((day, index) => {
          const dayEvents = getEventsForDay(day);
          const isCurrentMonth = day.month() === currentDate.month();
          const isToday = day.isSame(dayjs(), 'day');
          const hasConflict = hasConflicts(dayEvents);

          return (
            <CalendarCell
              key={index}
              day={day}
              events={dayEvents}
              isCurrentMonth={isCurrentMonth}
              isToday={isToday}
              hasConflict={hasConflict}
              onEventSelect={setSelectedEvent}
            />
          );
        })}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: selectedEvent.color }}
                />
                <h3 className="text-xl font-bold text-gray-800">{selectedEvent.title}</h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl transition duration-200"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">{selectedEvent.description}</p>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{dayjs(selectedEvent.date).format('dddd, MMMM D, YYYY')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{selectedEvent.startTime} - {selectedEvent.endTime}</span>
              </div>
              <div className="pt-4 border-t">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;