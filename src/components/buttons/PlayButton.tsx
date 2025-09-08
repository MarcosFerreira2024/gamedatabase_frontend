import React, { useContext } from "react";
import { IconButton } from "./IconButton";
import { AppContext } from "../../contexts/AppContext";

function PlayButton({ video }: { video: string }) {
  const { handleCurrentVideo } = useContext(AppContext);
  return (
    <IconButton
      onClick={() => handleCurrentVideo(video)}
      size="sm"
      iconSize={16}
      icon="icons/play.svg"
    />
  );
}

export default PlayButton;
