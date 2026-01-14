import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-container">
      <header>
        <h1>Welcome to My Demo Page</h1>
        <p>Click the button below to see a modal popup.</p>
      </header>

      <main>
        <button onClick={openModal}>Click me!</button>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Hello!</h2>
              <p>This is a modal.</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </main>

      <footer>
        <p>© 2026 Demo Host Page</p>
      </footer>
    </div>
  );
}

export default App;
