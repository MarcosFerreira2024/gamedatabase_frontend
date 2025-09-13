import { useRef } from "react";
import GameGaleryItem from "./GameGaleryItem";
import SliderControls from "../games/SliderControls";
import useSlider from "../../hooks/useSlider";

type GameGaleryItemListProps = {
  data: {
    image: string;
  }[];
  selectedImage: string;
  selectImage: (image: string) => void;
};

function GameGaleryItemList({
  data,
  selectImage,
  selectedImage,
}: GameGaleryItemListProps) {
  const ref = useRef<HTMLDivElement>(null);

  const {
    canScrollToLeft,
    canScrollToRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleNext,
    handlePrev,
  } = useSlider(ref as React.RefObject<HTMLDivElement>);

  return (
    <>
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide select-none  "
      >
        {data.map((item, index) => (
          <GameGaleryItem
            isSelected={item.image === selectedImage}
            key={index}
            image={item.image}
            selectImage={selectImage}
          />
        ))}
      </div>
      <div className="md:flex hidden self-end">
        <SliderControls
          handleNext={handleNext}
          handlePrev={handlePrev}
          canScrollToLeft={canScrollToLeft}
          canScrollToRight={canScrollToRight}
        />
      </div>
    </>
  );
}

export default GameGaleryItemList;
