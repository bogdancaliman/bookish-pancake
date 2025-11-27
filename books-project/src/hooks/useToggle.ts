import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toogle = () => setIsOpen((prev) => !prev);

  return { isOpen, toogle };
};
