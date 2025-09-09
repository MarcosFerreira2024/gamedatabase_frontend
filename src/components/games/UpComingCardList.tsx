import React from "react";
import type { UpcomingCardProps } from "./UpComingCard";
import UpComingCard from "./UpComingCard";

function UpComingCardList({
  data,
  title,
}: {
  title: string;
  data: UpcomingCardProps[];
}) {
  return (
    <>
      <div className="mt-10 flex flex-col gap-4">
        <h2 className="text-2xl text-stone-950 dark:text-stone-100  ">
          {title}
        </h2>
        <div className="grid grid-cols-2 w-full gap-6 ">
          {data.map((item, index) => (
            <UpComingCard
              key={index}
              title={item.title}
              day={item.day}
              hour={item.hour}
              minutes={item.minutes}
              releaseDate={item.releaseDate}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default UpComingCardList;
