import React from "react";

export default function ModalView({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="highlight-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
