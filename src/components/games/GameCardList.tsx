import React from "react";
import type { GameCardProps } from "./GameCard";
import GameCard from "./GameCard";

export type GameCardListData = {
  data: GameCardProps[];
};

function GameCardList({ data }: GameCardListData) {
  return (
    <div className="flex flex-nowrap gap-6 ">
      {data.map((item, index) => (
        <GameCard
          favorited={item.favorited}
          video={item.video}
          link={item.link}
          image={item.image}
          name={item.name}
          platform={item.platform}
          id={item.id}
          key={index}
        />
      ))}
    </div>
  );
}

export default GameCardList;
