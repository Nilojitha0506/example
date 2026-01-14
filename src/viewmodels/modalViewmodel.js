import { useState } from "react";
import { modalModel } from "../models/modalModel";

export function useModalViewModel() {
  const [isOpen, setIsOpen] = useState(modalModel.isOpen);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
}
