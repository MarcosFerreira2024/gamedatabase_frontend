import { useEffect } from "react";
import Button from "../buttons/Button";

function SliderControls({
  handlePrev,
  handleNext,
  canScrollToRight,
  canScrollToLeft,
}: {
  handlePrev: () => void;
  handleNext: () => void;
  canScrollToRight: boolean;
  canScrollToLeft: boolean;
}) {
  return (
    <div className="flex gap-4">
      <Button
        holdIcon
        icon="/icons/chevron-left.svg"
        iconSize={16}
        size="sm"
        disabled={!canScrollToLeft}
        onClick={() => handlePrev()}
      />
      <Button
        holdIcon
        icon="/icons/chevron-right.svg"
        iconSize={16}
        disabled={!canScrollToRight}
        size="sm"
        onClick={() => handleNext()}
      />
    </div>
  );
}

export default SliderControls;
