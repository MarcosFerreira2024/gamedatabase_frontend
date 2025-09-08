import { useNavigate } from "react-router-dom";

export type MenuLinkProps = {
  to: string;
  text: string;
};
function MenuLink({ to, text }: MenuLinkProps) {
  const currentPage = window.location.href;
  const samePage = currentPage.includes(to);

  const navigate = useNavigate();

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
