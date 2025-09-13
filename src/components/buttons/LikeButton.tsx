import React from "react";
import Button from "./Button";

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
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    handleFav(gameId);
  };

  return (
    <Button
      holdIcon
      title="close video"
      iconSize={16}
      onClick={handleClick}
      className={`absolute  top-3  right-3 ${className}`}
      icon={isFav ? "/icons/heart.svg" : "/icons/heart-filled.svg"}
      size="sm"
      variant="dark"
    />
  );
}

export default LikeButton;
