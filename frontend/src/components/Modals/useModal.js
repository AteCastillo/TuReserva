import { useState } from "react";
import { useHistory } from "react-router-dom"
export const useModal = (initialValue = false, login = null) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  let history = useHistory()
  const openModal = () => setIsOpen(true);

  const closeModal = () => {
    setIsOpen(false);
    if (login !== null){
      login(true)
    }
    history.push('/')
  }
  return [isOpen, openModal, closeModal];
};