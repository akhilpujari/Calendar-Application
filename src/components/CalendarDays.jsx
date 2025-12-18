const CalendarDays = () => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  return (
    <div className="grid grid-cols-7 mb-2">
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          className="text-center py-3 font-semibold text-gray-600 text-sm md:text-base"
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;