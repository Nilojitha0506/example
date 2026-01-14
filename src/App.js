import React from "react";
import AppView from "./views/AppView";
import { modalViewModel } from "./viewmodels/modalViewmodel";
import { eventViewModel } from "./viewmodels/eventViewmodel";
import { userViewModel } from "./viewmodels/userViewmodel";

export default function App() {
  const modalVM = modalViewModel();
  const eventVM = eventViewModel();
  const userVM = userViewModel();

  return <AppView modalVM={modalVM} eventVM={eventVM} userVM={userVM} />;
}
