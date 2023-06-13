import React, { JSX, createContext, useState, useContext } from "react";

//Interface for Global Context
interface IContext {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
  pageId: string | null;
  setPageId: React.Dispatch<React.SetStateAction<string | null>>;
}

//Create Context
const AppContext = createContext({} as IContext);

//Custom Hook
export const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [pageId, setPageId] = useState<string | null>(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, closeSidebar, openSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
