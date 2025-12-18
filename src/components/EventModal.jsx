import { useState } from "react";

export default function EventModal({ dateKey, event, onClose, onSave }) {
  const [title, setTitle] = useState(event?.title || "");
  const [startTime, setStartTime] = useState(event?.startTime || "");
  const [endTime, setEndTime] = useState(event?.endTime || "");
  const [color, setColor] = useState(event?.color || "#2563eb");

  function handleSubmit() {
    onSave({
      title,
      startTime,
      endTime,
      color
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-72">
        <h3 className="font-semibold mb-2">
          {event ? "Event Details" : "Add Event"}
        </h3>

        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <input value={startTime} onChange={e => setStartTime(e.target.value)} placeholder="Start (HH:MM)" />
        <input value={endTime} onChange={e => setEndTime(e.target.value)} placeholder="End (HH:MM)" />
        <input type="color" value={color} onChange={e => setColor(e.target.value)} />

        <div className="flex justify-end gap-2 mt-3">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
}
