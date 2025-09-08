import { useState, useRef, useEffect } from "react";

function useCarousel(length: number, interval = 3000) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [startX, setStartX] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const remainingTimeRef = useRef(interval);
  const lastTimeRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev + 1 >= length - 1) {
        return 1;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev - 1 <= 0) {
        return length - 2;
      }
      return prev - 1;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    pauseAutoplay();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    let diff = e.clientX - startX;

    if (diff > 200) diff = 400;
    if (diff < -200) diff = -400;
    setTranslateX(diff);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;

    if (diff > 50) prevSlide();
    else if (diff < -50) nextSlide();

    setIsDragging(false);
    setTranslateX(0);
    remainingTimeRef.current = interval;
    startAutoplay();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp({ clientX: startX } as any);
  };

  const startAutoplay = () => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    lastTimeRef.current = Date.now();

    autoplayRef.current = setTimeout(() => {
      nextSlide();
      remainingTimeRef.current = interval;
      startAutoplay();
    }, remainingTimeRef.current);
  };

  const pauseAutoplay = () => {
    if (!autoplayRef.current) return;
    clearTimeout(autoplayRef.current);
    autoplayRef.current = null;

    if (lastTimeRef.current !== null) {
      const elapsed = Date.now() - lastTimeRef.current;
      remainingTimeRef.current = remainingTimeRef.current - elapsed;
    }
  };

  const handleMouseEnter = () => pauseAutoplay();

  const getTransform = () => {
    return `translateX(${
      -currentSlide * 100 +
      (isDragging
        ? (translateX / (containerRef.current?.offsetWidth || 1)) * 100
        : 0)
    }%)`;
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, []);

  return {
    currentSlide,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleMouseEnter,
    getTransform,
    containerRef,
    prevSlide,
    nextSlide,
    setCurrentSlide,
    isDragging,
  };
}

export default useCarousel;
