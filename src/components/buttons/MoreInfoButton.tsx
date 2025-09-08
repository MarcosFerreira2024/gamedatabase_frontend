import React from "react";
import { IconButton } from "./IconButton";
import { useNavigate } from "react-router-dom";

function MoreInfoButton({ to }: { to: string }) {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => navigate(to)}
      size="sm"
      iconSize={16}
      icon="icons/info.svg"
    />
  );
}

export default MoreInfoButton;
