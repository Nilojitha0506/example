let user = null;

export const userModel = {
  getUser: () => user,
  setUser: (u) => { user = u; },
  isLoggedIn: () => !!user
};
