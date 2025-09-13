import { useLocation, useNavigate } from "react-router-dom";

export type MenuLinkProps = {
  to: string;
  text: string;
};
function MenuLink({ to, text }: MenuLinkProps) {
  const path = useLocation();
  const navigate = useNavigate();
  const len = path.pathname.split("/").length;

  const samePage =
    path.pathname.split("/")[len - 1] ===
    to.split("/")[to.split("/").length - 1];

  return (
    <button
      className={`dark:text-stone-50 text-stone-700 underline-offset-4   ${
        samePage ? "underline cursor-default " : "hover:underline "
      }`}
      onClick={() => navigate(to)}
    >
      {text}
    </button>
  );
}

export default MenuLink;
