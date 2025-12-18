import Calendar from './components/Calendar';
import { eventsData } from './data/events';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Calendar Dashboard
          </h1>
        </header>

        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
          <Calendar events={eventsData} />
        </div>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Navigate with arrow buttons • Click events for details • ⚠ indicates conflicts</p>
        </footer>
      </div>
    </div>
  );
}

export default App;