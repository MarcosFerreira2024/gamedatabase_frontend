import CardBase from "./CardBase";

export type HomeCardProps = {
  favorited: boolean;
  video: string;
  link: string;
  image: string;
  name: string;
  platform: string;
  id: string;
};
function HomeCard({
  favorited,
  video,
  link,
  image,
  name,
  platform,
  id,
}: HomeCardProps) {
  return (
    <CardBase
      minWidth={319}
      width={319}
      favorited={favorited}
      video={video}
      link={link}
      image={image}
      name={name}
      platform={platform}
      id={id}
    />
  );
}

export default HomeCard;
