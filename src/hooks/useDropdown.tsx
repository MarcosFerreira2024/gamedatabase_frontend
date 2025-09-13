import React from "react";

type currentOpened = {
  id: string;
};

function useDropdown() {
  const [currentOpened, setCurrentOpened] =
    React.useState<currentOpened | null>(null);

  return {
    currentOpened,
    setCurrentOpened,
  };
}

export default useDropdown;
