import CardBase from "./CardBase";
import ListCard from "./ListCard";

export type GameCardProps = {
  favorited: boolean;
  video: string;
  link: string;
  image: string;
  name: string;
  platform: string;
  id: string;
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
  return (
    <>
      <CardBase
        favorited={favorited}
        video={video}
        link={link}
        image={image}
        name={name}
        platform={platform}
        id={id}
      />
    </>
  );
}

export default GameCard;
