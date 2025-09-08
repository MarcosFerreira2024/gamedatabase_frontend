import { createContext } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};

type ContextType = {};

export const Context = createContext({} as ContextType);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
