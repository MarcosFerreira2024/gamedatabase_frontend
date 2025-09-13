import type { MenuLinkProps } from "../components/navbar/MenuLink";

export const linkButtons: MenuLinkProps[] = [
  {
    text: "Início",
    to: "/home",
  },
  {
    text: "Jogos",
    to: "/home/games?style=grid",
  },
  {
    text: "Minha Lista",
    to: "/my-games",
  },
];
