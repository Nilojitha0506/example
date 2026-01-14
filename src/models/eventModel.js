let events = [
  { name: "Football Championship", date: "2026-02-10" },
  { name: "Marathon Run", date: "2026-03-05" },
  { name: "Basketball Finals", date: "2026-04-12" }
];

export const eventModel = {
  getEvents: () => events,
  addEvent: (event) => { events.push(event); },
  removeEvent: (name) => { events = events.filter(e => e.name !== name); }
};
