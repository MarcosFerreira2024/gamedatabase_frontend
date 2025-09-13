import HomeCard, { type HomeCardProps } from "./HomeCard";

export type GameCardListData = {
  data: HomeCardProps[];
};

function HomeCardList({ data }: GameCardListData) {
  return (
    <div className="flex flex-nowrap gap-6 w-full ">
      {data.map((item, index) => (
        <HomeCard
          favorited={item.favorited}
          video={item.video}
          link={item.link}
          image={item.image}
          name={item.name}
          platform={item.platform}
          id={item.id}
          key={index}
        />
      ))}
    </div>
  );
}

export default HomeCardList;
