import { useState } from "react";
import { userModel } from "../models/userModel";

export function useUserViewModel(eventVM) {
  const [user, setUser] = useState(userModel.user);

  const login = (username) => {
    if (!username) return false;
    userModel.user = { name: username };
    setUser(userModel.user);
    return true;
  };

  const logout = () => {
    userModel.user = null;
    setUser(null);

    // Clear events on logout
    if (eventVM) {
      eventVM.clearEvents();
    }
  };

  return { user, login, logout };
}
