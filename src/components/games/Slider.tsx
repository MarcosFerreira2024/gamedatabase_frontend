import GameCardList from "./GameCardList";
import type { GameCardProps } from "./GameCard";
import SliderControls from "./SliderControls";

type SliderProps = {
  title: string;
  data: GameCardProps[];
};

function Slider({ title, data }: SliderProps) {
  return (
    <div className="flex flex-col px-6 flex-nowrap gap-4 w-full mx-auto  mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-stone-950 dark:text-stone-100  ">
          {title}
        </h2>

        <SliderControls handleNext={() => {}} handlePrev={() => {}} />
      </div>
      <div className=" overflow-x-scroll scrollbar-hide">
        <GameCardList data={data} />
      </div>
    </div>
  );
}

export default Slider;
