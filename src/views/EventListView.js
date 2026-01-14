import React, { useState } from "react";

export default function EventListView({ events, onAdd, onDelete, userVM }) {
  const [newEvent, setNewEvent] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleAdd = () => {
    if (!userVM.user) {
      alert("You must login to add events!");
      return;
    }
    if (!newEvent || !newDate) {
      alert("Enter both name and date!");
      return;
    }
    onAdd({ title: newEvent, date: newDate });
    setNewEvent("");
    setNewDate("");
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>

      {!userVM.user && <p style={{ color: "red" }}>Login to see events!</p>}

      {userVM.user && (
        <ul>
          {events.length === 0 && <li>No events yet</li>}
          {events.map((e) => (
            <li key={e.id}>
              {e.title} - <strong>{e.date}</strong>
              <button onClick={() => onDelete(e.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <div className="add-event">
        {userVM.user ? (
          <>
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
          </>
        ) : null}
      </div>
    </div>
  );
}
