import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import Button from "./Button";

function PlayButton({ video }: { video: string }) {
  const { handleCurrentVideo } = useContext(AppContext);
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    handleCurrentVideo(video);
  };
  return (
    <Button
      holdIcon
      onClick={handleClick}
      size="sm"
      iconSize={16}
      icon="/icons/play.svg"
    />
  );
}

export default PlayButton;
