import { useNavigate } from "react-router-dom";
import Options from "../buttons/Options";
import LikeButton from "../buttons/LikeButton";

export type GameCardProps = {
  favorited: boolean;
  video: string;
  image: string;
  link: string;
  id: string;
  name: string;
  platform: string;
};

function GameCard({
  favorited,
  video,
  link,
  image,
  name,
  platform,
  id,
}: GameCardProps) {
  const navigate = useNavigate();

  // const {} = useContext(GameContext);

  return (
    <div className="min-w-[319px] h-[475px] rounded-xl  overflow-hidden dark:border-stone-900 border-1 border-stone-200 dark:bg-stone-950 bg-stone-100">
      <div className="relative ">
        <img
          onClick={() => navigate(link)}
          src={image}
          className="h-[323px] cursor-pointer w-full object-cover object-center"
        />
        <LikeButton
          gameId={id}
          isFav={favorited}
          handleFav={() => window.alert("Função em desenvolvimento")}
        />
      </div>

      <div className="h-[152px]">
        <div className="flex flex-col h-full gap-3 px-3 py-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-[24px] h-[24px] bg-white"></div>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {platform}
              </p>
            </div>

            <p className="text-xl text-stone-700 max-h-[56px] dark:text-stone-100 max-w-[200px]">
              {name}
            </p>
          </div>
          <div className="flex self-end gap-2  items-center">
            <Options direction="row" toCopy={link} video={video} link={link} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
