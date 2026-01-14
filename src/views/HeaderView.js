import React, { useState } from "react";

export default function HeaderView({ userVM, onAddClick }) {
  const [username, setUsername] = useState("");

  return (
    <header className="header">
      <h1>Sports Arena</h1>
      <p>Get ready for upcoming sports events!</p>

      {userVM.user ? (
        <>
          <span>Welcome, {userVM.user.name}</span>
          <button onClick={userVM.logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => userVM.login(username)}>Login</button>
        </>
      )}

      <button className="highlight-button" onClick={onAddClick}>
        Learn More
      </button>
    </header>
  );
}
