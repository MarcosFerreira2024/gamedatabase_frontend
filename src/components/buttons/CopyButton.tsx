import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { IconButton } from "./IconButton";

function CopyButton({ toCopy }: { toCopy: string }) {
  const { copyToClipboard } = useContext(AppContext);
  const handleCopy = () => {
    copyToClipboard(toCopy);
    window.alert("Link copiado com sucesso, compartilhe com seus amigos!");
  };
  return (
    <IconButton
      size="sm"
      iconSize={16}
      onClick={() => handleCopy()}
      icon="icons/share.svg"
    />
  );
}

export default CopyButton;
