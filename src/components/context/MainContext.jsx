import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <MainContext.Provider value={{ modalOpen, openModal, closeModal }}>
      {children}
    </MainContext.Provider>
  );
};
