import dayjs from 'dayjs';

const CalendarHeader = ({ currentDate, onPrevious, onNext, onToday }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
      <div className="mb-4 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {currentDate.format('MMMM YYYY')}
        </h2>
        <p className="text-gray-600 mt-1 text-sm md:text-base">
          Today is {dayjs().format('dddd, MMMM D, YYYY')}
        </p>
      </div>
      
      <div className="flex items-center space-x-3">
        <button
          onClick={onToday}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition duration-200 active:scale-95 cursor-pointer"
        >
          Today
        </button>
        
        <div className="flex space-x-2">
          <button
            onClick={onPrevious}
            className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition duration-200 active:scale-95 cursor-pointer"
            aria-label="Previous month"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={onNext}
            className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition duration-200 active:scale-95 cursor-pointer"
            aria-label="Next month"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;