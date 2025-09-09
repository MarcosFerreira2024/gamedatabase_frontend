import type { GameCardProps } from "../../components/games/GameCard";
import type { UpcomingCardProps } from "../../components/games/UpComingCard";

export const gameCardMock: GameCardProps[] = [
  {
    favorited: false,
    video:
      "https://www.youtube.com/watch?v=mrT5q5xXb7Y&ab_channel=MarvelEntertainment",
    image: "mock/spiderman.png",
    link: "/games/3",
    id: "3",
    name: "Marvel's SpiderMan Remastered",
    platform: "Playstation 5",
  },
  {
    favorited: false,
    video: "https://www.youtube.com/watch?v=gmA6MrX81z4",
    image: "mock/red-dead.png",
    link: "/games/2",
    id: "2",
    name: "Red Dead Redemption 2",
    platform: "Playstation 5",
  },
  {
    favorited: false,
    video: "https://www.youtube.com/watch?v=6XGeJwsUP9c",
    image: "mock/silk-song.png",
    link: "/games/1",
    id: "1",
    name: "SilkSong",
    platform: "Playstation 5",
  },
  {
    favorited: false,
    video:
      "https://www.youtube.com/watch?v=mrT5q5xXb7Y&ab_channel=MarvelEntertainment",
    image: "mock/spiderman.png",
    link: "/games/3",
    id: "3",
    name: "Marvel's SpiderMan Remastered",
    platform: "Playstation 5",
  },
  {
    favorited: false,
    video: "https://www.youtube.com/watch?v=gmA6MrX81z4",
    image: "mock/red-dead.png",
    link: "/games/2",
    id: "2",
    name: "Red Dead Redemption 2",
    platform: "Playstation 5",
  },
  {
    favorited: false,
    video: "https://www.youtube.com/watch?v=6XGeJwsUP9c",
    image: "mock/silk-song.png",
    link: "/games/1",
    id: "1",
    name: "SilkSong",
    platform: "Playstation 5",
  },
];

export const upcomingGameMock: UpcomingCardProps[] = [
  {
    day: "2",
    hour: "2",
    minutes: "2",
    releaseDate: "20/12/2022",
    title: "SilkSong",
    image: "mock/spiderman.png",
  },
  {
    day: "2",
    hour: "2",
    minutes: "2",
    releaseDate: "20/12/2022",
    title: "SilkSong",
    image: "mock/red-dead.png",
  },
  {
    day: "2",
    hour: "2",
    minutes: "2",
    releaseDate: "20/12/2022",
    title: "SilkSong",
    image: "mock/silk-song.png",
  },
  {
    day: "2",
    hour: "2",
    minutes: "2",
    releaseDate: "20/12/2022",
    title: "SilkSong",
    image: "mock/silk-song.png",
  },
];
