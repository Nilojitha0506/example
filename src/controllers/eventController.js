import { eventModel } from "../models/eventModel";

export const eventController = {
  getEvents: () => eventModel.getEvents(),
  addEvent: (event) => eventModel.addEvent(event),
  removeEvent: (name) => eventModel.removeEvent(name)
};
