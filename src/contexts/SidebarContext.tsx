import React, { createContext, useState, type ReactNode } from "react";

type SidebarContextType = {
  open: string[];
  setOpen: React.Dispatch<React.SetStateAction<string[]>>;
  handleToggleAccordion: (id: string) => void;
  sideBarVisibility: boolean;
  setSideBarVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextType>(
  {} as SidebarContextType
);

export { SidebarContext };

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<string[]>([]);
  const [sideBarVisibility, setSideBarVisibility] = useState(true);

  const handleToggleAccordion = (id: string) => {
    if (open.includes(id)) {
      return setOpen(open.filter((i) => i !== id));
    } else if (open.length >= 2) {
      open.shift();
      setOpen([...open, id]);
      return;
    } else {
      setOpen([...open, id]);
      return;
    }
  };

  return (
    <SidebarContext.Provider
      value={{
        setSideBarVisibility,
        sideBarVisibility,
        open,
        setOpen,
        handleToggleAccordion,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
