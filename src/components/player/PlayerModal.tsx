import { useContext } from "react";
import ReactPlayer from "react-player";
import { AppContext } from "../../contexts/AppContext";
import { motion } from "framer-motion";
import Button from "../buttons/Button";

function PlayerModal({ video }: { video: string }) {
  const { closeModal, handleKeyboard } = useContext(AppContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full z-100"
    >
      <ReactPlayer
        volume={0.2}
        width={"100%"}
        height={"100%"}
        fallback={""} // preciso fazer o skeleton
        src={video}
        onKeyDown={(e) => handleKeyboard(e)}
        crossOrigin="anonymous"
      />
      <Button
        holdIcon
        title="close video"
        iconSize={16}
        className="absolute  top-[50%]  right-6 "
        icon="/icons/close.svg"
        size="sm"
        onClick={closeModal}
        variant="dark"
      />
    </motion.div>
  );
}

export default PlayerModal;
