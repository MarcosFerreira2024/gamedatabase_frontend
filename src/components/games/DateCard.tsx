import React from "react";

type DateCardProps = {
  value: string;
  text: string;
};

function DateCard({ value, text }: DateCardProps) {
  return (
    <div className="flex flex-col w-[165px] rounded-xl border-stone-900 border h-[146px] bg-stone-950/70 justify-center gap-2 items-center">
      <span className="text-3xl text-stone-50  ">{value}</span>
      <span className="text-stone-200">{text}</span>
    </div>
  );
}

export default DateCard;
