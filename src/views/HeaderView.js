import React from "react";

export default function HeaderView({ userVM, onLoginClick }) {
  return (
    <header className="header">
      <h1>Sports Arena</h1>
      <p>Never miss your favorite events!</p>

      {!userVM.user && (
        <button className="highlight-button" onClick={onLoginClick}>
          Login
        </button>
      )}

      {userVM.user && (
        <div style={{ marginTop: "1rem" }}>
          <span>Welcome, {userVM.user.name}!</span>
          <button
            className="highlight-button"
            style={{ marginLeft: "1rem" }}
            onClick={userVM.logout}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
