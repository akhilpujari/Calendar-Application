// data/events.js
import dayjs from 'dayjs';

export const eventsData = [
  {
    id: 1,
    date: "2025-12-17",
    startTime: "09:00",
    endTime: "11:00",
    color: "#f6be23",
    title: "Team Standup Meeting",
    description: "Daily sync with the development team"
  },
  {
    id: 2,
    date: "2025-12-17",
    startTime: "09:30",
    endTime: "12:00",
    color: "#f6501e",
    title: "Client Presentation",
    description: "Quarterly review with key stakeholders"
  },
  {
    id: 3,
    date: "2025-12-17",
    startTime: "14:00",
    endTime: "15:00",
    color: "#4287f5",
    title: "Product Demo",
    description: "New feature demonstration"
  },
  {
    id: 4,
    date: "2025-12-15",
    startTime: "10:00",
    endTime: "11:30",
    color: "#4CAF50",
    title: "Planning Session",
    description: "Sprint planning for next iteration"
  },
  {
    id: 5,
    date: "2025-12-15",
    startTime: "10:30",
    endTime: "12:00",
    color: "#9C27B0",
    title: "Code Review",
    description: "Peer review session"
  },
  {
    id: 6,
    date: dayjs().format('YYYY-MM-DD'),
    startTime: "10:00",
    endTime: "11:00",
    color: "#E91E63",
    title: "Today's Meeting",
    description: "Important meeting scheduled for today"
  },
  {
    id: 7,
    date: dayjs().format('YYYY-MM-DD'),
    startTime: "15:00",
    endTime: "16:00",
    color: "#FF9800",
    title: "Team Sync",
    description: "Weekly team synchronization"
  },
  {
    id: 8,
    date: "2025-12-19",
    startTime: "13:00",
    endTime: "14:30",
    color: "#2196F3",
    title: "Workshop",
    description: "Technical workshop on new framework"
  }
];