import { useState } from "react";
import { eventModel } from "../models/eventModel";

export function useEventViewModel() {
  const [events, setEvents] = useState(eventModel.getEvents());

  const addEvent = (event) => {
    const today = new Date();
    const inputDate = new Date(event.date);
    today.setHours(0,0,0,0);
    inputDate.setHours(0,0,0,0);

    if (inputDate < today) {
      alert("You cannot add an event with a past date!");
      return;
    }

    eventModel.addEvent(event);
    setEvents([...eventModel.getEvents()]);
  };

  const removeEvent = (id) => {
    eventModel.removeEvent(id);
    setEvents([...eventModel.getEvents()]);
  };

  const clearEvents = () => {
    eventModel.clearEvents();
    setEvents([]);
  };

  return { events, addEvent, removeEvent, clearEvents };
}
