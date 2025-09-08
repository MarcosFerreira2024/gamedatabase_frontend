import React from "react";
import { IconButton } from "./IconButton";

function LikeButton({
  isFav,
  handleFav,
  gameId,
  className,
}: {
  isFav: boolean;
  handleFav: (gameId: string) => void;
  gameId: string;
  className?: string;
}) {
  return (
    <IconButton
      title="close video"
      iconSize={16}
      onClick={() => handleFav(gameId)}
      className={`absolute  top-3  right-3 ${className}`}
      icon={isFav ? "icons/heart.svg" : "icons/heart-filled.svg"}
      size="sm"
      variant="dark"
    />
  );
}

export default LikeButton;
