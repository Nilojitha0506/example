import React, { useState } from "react";
import HeaderView from "./HeaderView";
import FooterView from "./FooterView";
import ModalView from "./ModalView";
import EventListView from "./EventListView";
import { modalController } from "../controllers/modalController";
import "../App.css";

const AppView = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    modalController.open();
    setModalOpen(true);
  };

  const closeModal = () => {
    modalController.close();
    setModalOpen(false);
  };

  return (
    <div className="app-container">
      <HeaderView />
      <main>
        <button className="highlight-button" onClick={openModal}>
          Learn More
        </button>

        <ModalView
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Welcome to Sports Arena!"
          content="Check out upcoming events and never miss a game!"
        />

        <EventListView />
      </main>
      <FooterView />
    </div>
  );
};

export default AppView;
