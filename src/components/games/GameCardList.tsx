import { useContext } from "react";
import GameCard, { type GameCardProps } from "./GameCard";
import ListCard from "./ListCard";
import { QueryContext } from "../../contexts/QueryContext";

export type GameCardListData = {
  data: GameCardProps[];
};

function GameCardList({ data }: GameCardListData) {
  const { style } = useContext(QueryContext);
  return (
    <>
      {style === "grid" && (
        <div
          className={`grid justify-center gap-6 gap-y-10 
         grid-cols-[repeat(auto-fit,minmax(292px,1fr))]`}
        >
          {data.map((item, index) => (
            <GameCard
              key={index}
              favorited={item.favorited}
              video={item.video}
              link={item.link}
              image={item.image}
              name={item.name}
              platform={item.platform}
              id={item.id}
            />
          ))}
        </div>
      )}

      {style === "list" && (
        <div className="flex flex-col  w-full ">
          {data.map((item, index) => (
            <ListCard key={index} {...item} />
          ))}
        </div>
      )}
    </>
  );
}

export default GameCardList;
