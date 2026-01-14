import React, { useState } from "react";

export default function EventListView({ events, onAdd, onDelete, userVM }) {
  const [newEvent, setNewEvent] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleAdd = () => {
    if (!userVM.user) {
      alert("You must be logged in to add an event!");
      return;
    }
    if (!newEvent || !newDate) {
      alert("Please enter both event name and date!");
      return;
    }
    const today = new Date();
    const inputDate = new Date(newDate);

    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);

    if (inputDate < today) {
      alert("You cannot add an event with a past date!");
      return;
    }
    onAdd(newEvent, newDate);
    setNewEvent("");
    setNewDate("");
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <ul>
        {events.length === 0 && <li>No events yet</li>}
        {events.map((e) => (
          <li key={e.id}>
            {e.title} - <strong>{e.date}</strong>
            <button onClick={() => onDelete(e.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div className="add-event">
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <button onClick={handleAdd}>Add Event</button>
      </div>
    </div>
  );
}
