import React, { useContext, useState, createContext, ReactNode } from "react";

// Interface For Global Context
interface IContext {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  sidebarOpen: () => void;
  sidebarClose: () => void;
  modalClose: () => void;
  modalOpen: () => void;
}

//Create Context for
const GlobalContext = createContext({} as IContext);

// Custom Hook
export const useGlobalContext = () => useContext(GlobalContext);

const ContextAPI = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const sidebarOpen = () => {
    setIsSidebarOpen(true);
  };
  const sidebarClose = () => {
    setIsSidebarOpen(false);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };
  const modalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        sidebarOpen,
        sidebarClose,
        modalOpen,
        modalClose,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextAPI;
