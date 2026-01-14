import { useState } from "react";
import { eventModel } from "../models/eventModel";

export function eventViewModel() {
  const [events, setEvents] = useState(eventModel.events);

  const addEvent = (title, date) => {
    if (!title || !date) return;
    const newEvent = { id: Date.now(), title, date };
    setEvents(prev => [...prev, newEvent]);
  };

  const removeEvent = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return { events, addEvent, removeEvent };
}
