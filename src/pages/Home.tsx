import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel";
import { carouselMock } from "../data/mock/carousel-mock";
import GameCard from "../components/games/GameCard";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import PlayerModal from "../components/player/PlayerModal";
import GameCardList from "../components/games/GameCardList";
import { gameCardMock, upcomingGameMock } from "../data/mock/games-mock";
import Slider from "../components/games/Slider";
import UpComingCard from "../components/games/UpComingCard";
import UpComingCardList from "../components/games/UpComingCardList";
import Container from "../components/Container";
import Recent from "../components/games/Recent";

function Home() {
  const { isModalOpen, currentVideo } = useContext(AppContext);
  return (
    <>
      {isModalOpen && currentVideo && <PlayerModal video={currentVideo} />}
      <Navbar />

      <Carousel data={carouselMock} />
      <Container>
        <Slider title="Recomendados" data={gameCardMock} />
        <UpComingCardList title="Em Breve" data={upcomingGameMock} />
        <Slider
          title="Lançamentos
"
          data={gameCardMock}
        />
        <Slider title="Populares" data={gameCardMock} />
        <Recent data={gameCardMock.slice(0, 3)} />
      </Container>
    </>
  );
}

export default Home;
