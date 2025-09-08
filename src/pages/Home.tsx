import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel";
import { carouselMock } from "../data/mock/carousel-mock";
import GameCard from "../components/games/GameCard";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import PlayerModal from "../components/player/PlayerModal";
import GameCardList from "../components/games/GameCardList";
import { gameCardMock } from "../data/mock/gamecard-mock";
import Slider from "../components/games/Slider";

function Home() {
  const { isModalOpen, currentVideo } = useContext(AppContext);
  return (
    <>
      {isModalOpen && currentVideo && <PlayerModal video={currentVideo} />}
      <Navbar />

      <Carousel data={carouselMock} />

      <Slider title="Recomendados" data={gameCardMock} />
    </>
  );
}

export default Home;
