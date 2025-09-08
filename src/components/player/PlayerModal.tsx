import React, { use, useContext } from "react";
import { IconButton } from "../buttons/IconButton";
import ReactPlayer from "react-player";
import { AppContext } from "../../contexts/AppContext";

function PlayerModal({ video }: { video: string }) {
  const { closeModal, handleKeyboard } = useContext(AppContext);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-100">
      <ReactPlayer
        volume={0.2}
        width={"100%"}
        height={"100%"}
        fallback={""} // preciso fazer o skeleton
        src={video}
        onKeyDown={(e) => handleKeyboard(e)}
        crossOrigin="anonymous"
      />
      <IconButton
        title="close video"
        iconSize={16}
        className="absolute  top-[50%]  right-6 "
        icon="icons/close.svg"
        size="sm"
        onClick={closeModal}
        variant="dark"
      />
    </div>
  );
}

export default PlayerModal;
