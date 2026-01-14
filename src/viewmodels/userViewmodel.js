import { useState } from "react";
import { userModel } from "../models/userModel";

export function userViewModel() {
  const [user, setUser] = useState(userModel.user);

  const login = (username) => {
    if (!username) return false;
    setUser({ name: username });
    return true;
  };

  const logout = () => setUser(null);

  return { user, login, logout };
}
