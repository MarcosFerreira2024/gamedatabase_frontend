import React, { createContext } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  handleKeyboard: (e: React.KeyboardEvent<HTMLVideoElement>) => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  currentVideo: string | null;
  handleCurrentVideo: (video: string) => void;
  setCurrentVideo: React.Dispatch<React.SetStateAction<string | null>>;
  copyToClipboard: (text: string) => void;
};

const AppContext = createContext({} as ContextType);
export { AppContext };
export const AppContextProvider = ({ children }: ContextProviderProps) => {
  const [isModalOpen, setModal] = React.useState(false);
  const handleKeyboard = (e: React.KeyboardEvent<HTMLVideoElement>) => {
    console.log(e.key);
    if (e.key === "Escape" || e.key === "Esc") {
      setModal(false);
    } else {
      return;
    }
  };

  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  const [currentVideo, setCurrentVideo] = React.useState<string | null>(null);

  const openModal = () => {
    setModal(true);
  };

  const handleCurrentVideo = (video: string) => {
    setCurrentVideo(video);
    openModal();
  };
  const closeModal = () => {
    if (currentVideo) setCurrentVideo(null);
    setModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        currentVideo,
        setCurrentVideo,
        handleKeyboard,
        isModalOpen,
        setModal,
        closeModal,
        handleCurrentVideo,
        openModal,
        copyToClipboard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
