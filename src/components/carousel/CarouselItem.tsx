import React, { useContext } from "react";
import { IconButton } from "../buttons/IconButton";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import Modal from "../Modal";
import PlayerModal from "../player/PlayerModal";

function CarouselItem({
  src,
  title,
  to,
  description,
  video,
}: {
  src: string;
  title: string;
  to: string;
  description: string;
  video: string;
}) {
  const navigate = useNavigate();

  const { handleCurrentVideo } = useContext(AppContext);

  return (
    <>
      <div className="min-w-full relative ">
        <div className="bg-black/10 w-full h-full absolute z-20"></div>
        <img
          src={src}
          alt={title}
          draggable={false}
          className="w-full min-w-full   max-h-[calc(100vh-82px)] min-h-[calc(100vh-82px)]  object-top object-cover "
        />

        <div className="absolute flex flex-col gap-2 top-20 left-6  z-40">
          <h1 className="text-5xl  text-stone-50 shadow-text max-w-[500px]">
            {title}
          </h1>
          <p className="text-lg text-stone-200 max-w-[700px] text-wrap shadow-text">
            {description}
          </p>
        </div>

        <div className="absolute flex gap-6 px-6 py-6 bottom-0 z-40 ">
          <IconButton
            onClick={() => {
              handleCurrentVideo(video);
            }}
            size="xl"
            icon="icons/play.svg"
          />
          <Button
            onClick={() => navigate(to)}
            width={220}
            size="xl"
            icon="icons/info.svg"
          >
            Mais Informações
          </Button>
        </div>
      </div>
    </>
  );
}

export default CarouselItem;
