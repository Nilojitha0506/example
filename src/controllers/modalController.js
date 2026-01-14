import { modalModel } from "../models/modalModel";

export const modalController = {
  open: () => modalModel.setState(true),
  close: () => modalModel.setState(false)
};
