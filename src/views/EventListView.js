import React, { useState } from "react";
import { eventController } from "../controllers/eventController";
import "../App.css";

const EventListView = () => {
  const [events, setEvents] = useState(eventController.getEvents());
  const [newEvent, setNewEvent] = useState("");
  const [newDate, setNewDate] = useState("");

  const addEvent = () => {
    if (newEvent && newDate) {
      eventController.addEvent({ name: newEvent, date: newDate });
      setEvents(eventController.getEvents());
      setNewEvent("");
      setNewDate("");
    }
  };

  const removeEvent = (name) => {
    eventController.removeEvent(name);
    setEvents(eventController.getEvents());
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((e, i) => (
          <li key={i}>
            <span>{e.name} - <strong>{e.date}</strong></span>
            <button onClick={() => removeEvent(e.name)}>Remove</button>
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
        <button onClick={addEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default EventListView;
