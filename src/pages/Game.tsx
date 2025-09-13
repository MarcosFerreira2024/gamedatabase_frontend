import React from "react";
import { useParams } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Recent from "../components/games/Recent";
import { gameCardMock, gameGaleryMock } from "../data/mock/games-mock";
import GameInfo from "../components/game/GameInfo";
import GameGalery from "../components/game/GameGalery";
import { AnimatePresence } from "framer-motion";
import SelectorsSection from "../components/game/SelectorsSection";
import useSelectors from "../hooks/useSelectors";

function Game() {
  const { activeSection, handleSelection, sectionNames, selectSection } =
    useSelectors();
  return (
    <Mainlayout>
      <div className="mt-5 flex max-w-[1440px]  mx-auto gap-10">
        <GameGalery video={gameGaleryMock.video} data={gameGaleryMock.images} />
        <GameInfo
          name={gameGaleryMock.name}
          rating={gameGaleryMock.rating}
          summary={gameGaleryMock.summary}
        />
      </div>

      <SelectorsSection
        sectionNames={sectionNames}
        activeSection={activeSection}
        handleSelection={handleSelection}
      />

      <div className="mt-10 h-[371px]">
        <AnimatePresence>{selectSection}</AnimatePresence>
      </div>
      <div className=" pb-20 max-w-[1440px] mx-auto">
        <Recent data={gameCardMock.slice(0, 3)} />
      </div>
    </Mainlayout>
  );
}

export default Game;
