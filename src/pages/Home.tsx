import Carousel from "../components/carousel/Carousel";
import { carouselMock } from "../data/mock/carousel-mock";
import { gameCardMock, upcomingGameMock } from "../data/mock/games-mock";
import Slider from "../components/games/Slider";
import UpComingCardList from "../components/games/UpComingCardList";
import Container from "../components/Container";
import Recent from "../components/games/Recent";
import Mainlayout from "../layout/Mainlayout";

function Home() {
  return (
    <>
      <Mainlayout>
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
      </Mainlayout>
    </>
  );
}

export default Home;
