import React, { useEffect } from "react";

function useSlider(ref: React.RefObject<HTMLDivElement>) {
  const scrollAmount = 343;
  const [canScrollToRight, setCanScrollToRight] = React.useState(true);
  const [canScrollToLeft, setCanScrollToLeft] = React.useState(false);

  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    let diff = e.clientX - startX;

    console.log(diff);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;

    if (diff < 0) handleNext();
    else handlePrev();
    setIsDragging(false);
  };

  const updateScrollState = (scrollLeft?: number) => {
    if (!ref.current) return;
    const currentScroll = scrollLeft ?? ref.current.scrollLeft;
    const { scrollWidth, clientWidth } = ref.current;

    setCanScrollToLeft(currentScroll > 0);
    setCanScrollToRight(currentScroll + clientWidth < scrollWidth);
  };

  const handlePrev = () => {
    if (!ref.current) return;
    const newScroll = Math.max(ref.current.scrollLeft - scrollAmount, 0);
    ref.current.scrollLeft = newScroll;
    updateScrollState(newScroll);
  };

  const handleNext = () => {
    if (!ref.current) return;
    const maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth;
    const newScroll = Math.min(
      ref.current.scrollLeft + scrollAmount,
      maxScrollLeft
    );
    ref.current.scrollLeft = newScroll;
    updateScrollState(newScroll);
  };

  useEffect(() => {
    updateScrollState();
  }, [ref.current]);

  return {
    handlePrev,
    handleNext,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isDragging,
    canScrollToRight,
    canScrollToLeft,
  };
}

export default useSlider;
