import React from "react";
import useCarousel from "../../hooks/useCarousel";
import CarouselItem from "./CarouselItem";

type CarouselProps = {
  data: {
    src: string;
    title: string;
    to: string;
    description: string;
    video: string;
  }[];
};

function Carousel({ data }: CarouselProps) {
  const extendedData = [data[data.length - 1], ...data, data[0]];

  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    getTransform,
    handleMouseEnter,
    containerRef,
  } = useCarousel(extendedData.length);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-all ease-linear motion-safe:duration-300 select-none"
        style={{ transform: getTransform() }}
      >
        {extendedData.map((item, i) => (
          <CarouselItem
            video={item.video}
            description={item.description}
            src={item.src}
            title={item.title}
            to={item.to}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
