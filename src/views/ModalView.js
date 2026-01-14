import React, { useState } from "react";

export default function ModalView({ isOpen, onClose, title, content, userVM }) {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name) {
      alert("Please enter your name!");
      return;
    }
    userVM.login(name);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
