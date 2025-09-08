import MenuLinkList from "./MenuLinkList";
import { linkButtons } from "../../data/data-buttons";
import Button from "../buttons/Button";
import { IconButton } from "../buttons/IconButton";

function Navbar() {
  return (
    <nav className=" relative flex items-center px-6 justify-between w-full h-[82px] bg-stone-950 border-b-1 border-stone-900">
      <div className="flex items-center gap-20">
        <div className="h-[48px] w-[48px] bg-black"></div>

        <MenuLinkList data={linkButtons} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Button
          width={275}
          size="xl"
          icon="icons/search.svg"
          order="iconFirst"
          justify="start"
        >
          Pesquisar
        </Button>
      </div>

      <IconButton
        size="xl"
        icon="icons/avatar.svg"
        iconSize={24}
        variant="dark"
      />
    </nav>
  );
}

export default Navbar;
