const CalendarCell = ({ day, events, isCurrentMonth, isToday, hasConflict, onEventSelect }) => {
  return (
    <div className={`
      min-h-32 md:min-h-40 bg-white p-2 relative
      transition-all duration-200
      ${!isCurrentMonth ? 'bg-gray-50 text-gray-400' : ''}
      ${isToday ? 'ring-2 ring-blue-500 ring-inset' : ''}
      hover:bg-gray-50 hover:shadow-sm
      group
    `}>
      {hasConflict && (
        <div className="absolute top-1 right-1">
          <span className="text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded-full font-medium flex items-center">
            ⚠
            <span className="ml-1 hidden group-hover:inline">Conflict</span>
          </span>
        </div>
      )}

      <div className="flex justify-between items-start mb-1">
        <span className={`
          text-sm md:text-base font-medium
          ${isToday ? 'bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''}
          ${!isCurrentMonth ? 'text-gray-300' : 'text-gray-700'}
        `}>
          {day.date()}
        </span>
        
      
        {events.length > 0 && !hasConflict && (
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
            {events.length}
          </span>
        )}
      </div>
  
      <div className="space-y-1 max-h-28 md:max-h-32 overflow-y-auto pr-1 scrollbar-thin">
        {events.slice(0, 3).map((event) => (
          <div
            key={event.id}
            onClick={() => onEventSelect(event)}
            className="text-xs md:text-sm p-2 rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-md text-black"
            style={{
              backgroundColor: `${event.color}20`, 
              borderLeft: `3px solid ${event.color}`,
            }}
          >
            <div className="font-medium truncate">{event.title}</div>
            <div className="text-xs opacity-90 mt-0.5">
              {event.startTime} - {event.endTime}
            </div>
          </div>
        ))}
        
        {events.length > 3 && (
          <div className="text-xs text-gray-500 font-medium pt-1 text-center">
            +{events.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarCell;