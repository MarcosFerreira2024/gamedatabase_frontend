import type { MenuLinkProps } from "../components/navbar/MenuLink";

export const linkButtons: MenuLinkProps[] = [
  {
    text: "Início",
    to: "/home",
  },
  {
    text: "Jogos",
    to: "/home/games",
  },
  {
    text: "Minha Lista",
    to: "/home/my-games",
  },
];
