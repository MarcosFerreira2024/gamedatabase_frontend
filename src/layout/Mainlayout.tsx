import React, { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import { AppContext } from "../contexts/AppContext";
import PlayerModal from "../components/player/PlayerModal";
import Modal from "../components/Modal";
import { AnimatePresence } from "framer-motion";

function Mainlayout({ children }: { children: React.ReactNode }) {
  const { isModalOpen, currentVideo } = useContext(AppContext);

  return (
    <>
      <AnimatePresence>
        {isModalOpen && currentVideo && (
          <Modal>
            <PlayerModal video={currentVideo} />
          </Modal>
        )}
      </AnimatePresence>
      <div className="dark:bg-stone-950 bg-stone-100  w-full ">
        <Navbar />
        {children}
      </div>
    </>
  );
}

export default Mainlayout;
