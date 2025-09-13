import { useNavigate } from "react-router-dom";
import Button from "./Button";
import React from "react";

function MoreInfoButton({ to }: { to: string }) {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigate(to);
  };
  return (
    <Button
      holdIcon
      onClick={handleClick}
      size="sm"
      iconSize={16}
      icon="/icons/info.svg"
    />
  );
}

export default MoreInfoButton;
