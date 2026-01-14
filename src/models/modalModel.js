let isOpen = false;

export const modalModel = {
  getState: () => isOpen,
  setState: (state) => { isOpen = state; }
};
