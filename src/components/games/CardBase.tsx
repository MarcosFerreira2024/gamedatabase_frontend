import { Link } from "react-router-dom";
import LikeButton from "../buttons/LikeButton";
import Options from "../buttons/Options";

export type CardBaseProps = {
  favorited: boolean;
  video: string;
  image: string;
  link: string;
  id: string;
  name: string;
  platform: string;
  expanded?: boolean;
  expandedWidth?: number;
  width?: number;
  minWidth?: number;
};
function CardBase({
  favorited,
  video,
  width,
  minWidth,
  link,
  image,
  name,
  platform,
  id,
}: CardBaseProps) {
  return (
    <div
      style={{
        width: `${width ? width + "px" : null}`,
        minWidth: `${minWidth ? minWidth + "px" : null}`,
        scrollSnapAlign: "start",
        maxWidth: "100%",
      }}
      className="h-[475px] select-none    rounded-xl overflow-hidden dark:border-stone-900 border border-stone-200 dark:bg-stone-950 bg-stone-100"
    >
      <Link to={link}>
        <div className="relative ">
          <img
            draggable={false}
            src={image}
            className="h-[323px] w-full   object-cover object-center"
          />
          <LikeButton
            gameId={id}
            isFav={favorited}
            handleFav={() => window.alert("Função em desenvolvimento")}
          />
        </div>
      </Link>

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

export default CardBase;
