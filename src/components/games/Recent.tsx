import React from "react";
import GameCardList from "./GameCardList";
import type { GameCardProps } from "./GameCard";

function Recent({ data }: { data: GameCardProps[] }) {
  return (
    <div className="flex flex-col  flex-nowrap gap-4 w-full   mt-10">
      <h2 className="text-2xl text-stone-950 dark:text-stone-100   ">
        Vistos Recentemente
      </h2>
      <GameCardList data={data} />
    </div>
  );
}

export default Recent;
