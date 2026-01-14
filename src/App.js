import React from "react";
import AppView from "./views/AppView";
import { useModalViewModel } from "./viewmodels/modalViewmodel";
import { useEventViewModel } from "./viewmodels/eventViewmodel";
import { useUserViewModel } from "./viewmodels/userViewmodel";

export default function App() {
  const modalVM = useModalViewModel();
  const eventVM = useEventViewModel();
  const userVM = useUserViewModel();

  return <AppView modalVM={modalVM} eventVM={eventVM} userVM={userVM} />;
}
