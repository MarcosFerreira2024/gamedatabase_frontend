import GameCardList from "./HomeCardList";
import type { GameCardProps } from "./GameCard";
import SliderControls from "./SliderControls";
import useSlider from "../../hooks/useSlider";
import React from "react";

type SliderProps = {
  title: string;
  data: GameCardProps[];
};

function Slider({ title, data }: SliderProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const {
    handlePrev,
    handleNext,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    canScrollToRight,
    canScrollToLeft,
  } = useSlider(ref as React.RefObject<HTMLDivElement>);

  return (
    <div className="flex flex-col  flex-nowrap gap-4 w-full select-none    mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-stone-950 dark:text-stone-100  ">
          {title}
        </h2>

        <SliderControls
          canScrollToLeft={canScrollToLeft}
          canScrollToRight={canScrollToRight}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
      <div
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="scroll-smooth snap-x overflow-x-scroll scrollbar-hide "
      >
        <GameCardList data={data} />
      </div>
    </div>
  );
}

export default Slider;
