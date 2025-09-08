import { IconButton } from "../buttons/IconButton";

function SliderControls({
  handlePrev,
  handleNext,
}: {
  handlePrev: () => void;
  handleNext: () => void;
}) {
  return (
    <div className="flex gap-4">
      <IconButton
        icon="icons/chevron-left.svg"
        iconSize={16}
        size="sm"
        disabled
        onClick={() => handlePrev()}
      />
      <IconButton
        icon="icons/chevron-right.svg"
        iconSize={16}
        size="sm"
        onClick={() => handleNext()}
      />
    </div>
  );
}

export default SliderControls;
