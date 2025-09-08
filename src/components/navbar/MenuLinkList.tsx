import React from "react";
import MenuLink, { type MenuLinkProps } from "./MenuLink";

type MenuLinkListProps = {
  data: MenuLinkProps[];
};

function MenuLinkList({ data }: MenuLinkListProps) {
  return (
    <ul className="flex gap-8 items-center">
      {data.map((item, index) => (
        <li key={index}>
          <MenuLink text={item.text} to={item.to} />
        </li>
      ))}
    </ul>
  );
}

export default MenuLinkList;
