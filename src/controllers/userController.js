import { userModel } from "../models/userModel";

export const userController = {
  login: (username) => {
    if (username) {
      userModel.setUser({ name: username });
      return true;
    }
    return false;
  },
  logout: () => userModel.setUser(null)
};
