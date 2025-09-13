import React from "react";
import Options from "../buttons/Options";
import { useLocation } from "react-router-dom";
import GameGaleryItemList from "./GameGaleryItemList";

type GameGaleryProps = {
  video: string;
  data: {
    image: string;
  }[];
};

function GameGalery({ video, data }: GameGaleryProps) {
  const location = useLocation();

  const [selectedImage, setSelectedImage] = React.useState<string>(
    data[0].image
  );

  return (
    <div className="flex flex-col gap-4 max-w-[480px] h-full ">
      <div className="relative">
        <img
          src={selectedImage}
          className="w-full h-full object-cover rounded-xl border-1 dark:border-stone-900 border-stone-200  min-h-[540px]"
        />
        <div className="absolute top-4 right-4">
          <Options
            direction="column"
            toCopy={location.pathname}
            video={video}
          />
        </div>
      </div>

      <GameGaleryItemList
        selectedImage={selectedImage}
        data={data}
        selectImage={setSelectedImage}
      />
    </div>
  );
}

export default GameGalery;
