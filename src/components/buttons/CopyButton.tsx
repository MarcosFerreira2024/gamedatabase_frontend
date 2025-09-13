import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import Button from "./Button";

function CopyButton({ toCopy }: { toCopy: string }) {
  const { copyToClipboard } = useContext(AppContext);
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    copyToClipboard(toCopy);
    window.alert("Link copiado com sucesso, compartilhe com seus amigos!");
  };
  return (
    <Button
      size="sm"
      holdIcon
      iconSize={16}
      onClick={handleCopy}
      icon="/icons/share.svg"
    />
  );
}

export default CopyButton;
