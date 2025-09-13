import React from "react";
import { useNavigate } from "react-router-dom";
import LikeButton from "../buttons/LikeButton";
import Options from "../buttons/Options";

type ListCardProps = {
  favorited: boolean;
  video: string;
  link: string;
  image: string;
  name: string;
  platform: string;
  id: string;
};
function ListCard({
  favorited,
  id,
  image,
  link,
  name,
  platform,
  video,
}: ListCardProps) {
  const navigate = useNavigate();

  return (
    <div className=" first:pt-0  md:py-4 py-2 dark:border-stone-900 border-b border-stone-200 dark:bg-stone-950 bg-stone-100">
      <div className="flex gap-3">
        <div className="relative">
          <img
            src={image}
            className="md:min-w-[320px] md:w-[320px] w-[180px] min-w-[180px] h-[180px]  cursor-pointer border-1 border-stone-200 dark:border-stone-900 object-cover object-center rounded-xl"
            onClick={() => navigate(link)}
          />
          <LikeButton
            className="absolute left-2 right-2"
            gameId={id}
            isFav={favorited}
            handleFav={() => window.alert("Função em desenvolvimento")}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2 ">
            <p className="text-stone-500 text-xs dark:text-stone-400">
              {platform}
            </p>
            <h1 className="dark:text-stone-100 text-lg text-stone-700">
              {name}
            </h1>
          </div>

          <Options direction="row" toCopy={link} video={video} link={link} />
        </div>
      </div>
    </div>
  );
}

export default ListCard;

/*        



*/
