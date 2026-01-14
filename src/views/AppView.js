import React from "react";
import HeaderView from "./HeaderView";
import FooterView from "./FooterView";
import ModalView from "./ModalView";
import EventListView from "./EventListView";
import "../App.css";

export default function AppView({ modalVM, eventVM, userVM }) {
  return (
    <div className="app-container">
      <HeaderView userVM={userVM} onLoginClick={modalVM.open} />

      <main>
        <EventListView
          events={eventVM.events}
          onAdd={eventVM.addEvent}
          onDelete={eventVM.removeEvent}
          userVM={userVM}
        />

        {modalVM.isOpen && (
          <ModalView
            isOpen={modalVM.isOpen}
            onClose={modalVM.close}
            title="Login"
            content="Enter your name to login"
            userVM={userVM}
          />
        )}
      </main>

      <FooterView />
    </div>
  );
}
