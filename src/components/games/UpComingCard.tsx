import React from "react";
import DateCard from "./DateCard";

export type UpcomingCardProps = {
  title: string;
  day: string;
  hour: string;
  minutes: string;
  releaseDate: string;
  image: string;
};

function UpComingCard({
  title,
  day,
  hour,
  minutes,
  image,
  releaseDate,
}: UpcomingCardProps) {
  return (
    <div className="w-full h-[500px] overflow-hidden rounded-xl   group relative">
      <img
        src={image}
        className="w-full h-full absolute grayscale-60 object-cover object-center group-hover:grayscale-0 duration-300 "
      />
      <div className="absolute left-0 px-4 top-4 w-full flex justify-between">
        <h1 className="text-stone-200 text-2xl shadow-text">{title}</h1>
        <p className="text-stone-200 shadow-text">{releaseDate}</p>
      </div>
      <div className="absolute left-4 top-4"></div>
      <div className="absolute  flex group-hover:opacity-0 duration-300 gap-4 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <DateCard value={day} text={"dias"} />
        <DateCard value={hour} text={"horas"} />
        <DateCard value={minutes} text={"minutos"} />
      </div>
    </div>
  );
}

export default UpComingCard;
