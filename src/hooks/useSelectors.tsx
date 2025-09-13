import React from "react";
import Media from "../components/game/Media";
import About from "../components/game/About";
import { gameGaleryMock } from "../data/mock/games-mock";

function useSelectors() {
  const possibleSections = [
    <About data={[]} />,
    <Media
      data={[
        {
          image: gameGaleryMock.images[0].image,
        },
        {
          image: gameGaleryMock.images[1].image,
        },
        {
          image: gameGaleryMock.images[2].image,
        },
        {
          image: gameGaleryMock.images[2].image,
        },
        {
          image: gameGaleryMock.images[2].image,
        },
        {
          image: gameGaleryMock.images[2].image,
        },
      ]}
    />,
  ];

  const sectionNames = ["About", "Media"];

  const [selectSection, setSelectSection] = React.useState(possibleSections[0]);

  const [activeSection, setActiveSection] = React.useState(0);

  const handleSelection = (index: number) => {
    setActiveSection(index);
    setSelectSection(possibleSections[index]);
  };

  return {
    selectSection,
    activeSection,
    handleSelection,
    possibleSections,
    sectionNames,
  };
}

export default useSelectors;
