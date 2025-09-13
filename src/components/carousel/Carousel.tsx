import React from "react";
import useCarousel from "../../hooks/useCarousel";
import CarouselItem from "./CarouselItem";
import { motion } from "framer-motion";
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
      <motion.div
        animate={{
          transform: getTransform(),
          transition: { duration: 0.2, ease: "linear" },
        }}
        className="flex  select-none"
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
      </motion.div>
    </div>
  );
}

export default Carousel;
