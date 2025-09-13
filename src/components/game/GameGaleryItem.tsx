export type GameGaleryItemProps = {
  image: string;
  selectImage: (image: string) => void;
  isSelected: boolean;
};

function GameGaleryItem({
  isSelected,
  image,
  selectImage,
}: GameGaleryItemProps) {
  return (
    <div
      onClick={() => {
        selectImage(image);
      }}
    >
      <img
        draggable={false}
        src={image}
        className={` min-h-[120px] select-none max-w-[160px] motion-safe:duration-200 motion-safe:ease-in max-h-[120px]  object-cover min-w-[160px] border-stone-900 border-1 rounded-xl  ${
          isSelected
            ? "grayscale-50"
            : "hover:opacity-50 cursor-pointer hover:grayscale-0 "
        }`}
      />
    </div>
  );
}

export default GameGaleryItem;
