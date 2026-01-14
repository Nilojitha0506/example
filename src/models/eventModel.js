export const eventModel = {
  events: [],
  getEvents() {
    return this.events;
  },
  addEvent(event) {
    this.events.push({ ...event, id: Date.now() });
  },
  removeEvent(id) {
    this.events = this.events.filter(e => e.id !== id);
  },
  clearEvents() {
    this.events = [];
  }
};
