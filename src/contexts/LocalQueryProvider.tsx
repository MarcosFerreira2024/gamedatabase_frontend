import React, { createContext, useState, type ReactNode } from "react";
import {
  type Orders,
  type Take,
  type Option,
  QueryContext,
} from "./QueryContext";

type LocalQueryProviderProps = {
  children: ReactNode;
};

export const LocalQueryProvider = ({ children }: LocalQueryProviderProps) => {
  const genresList = [""];
  const platformsList = [""];
  const modesList = [""];
  const themesList = [""];
  const playerPerspectiveList = [""];

  const [name, setName] = useState("");
  const [franchises, setFranchises] = useState("");
  const [developers, setDevelopers] = useState("");
  const [summary, setSummary] = useState("");
  const [usersScore, setUsersScore] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [publisher, setPublisher] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState(1);
  const [take, setTake] = useState<Take>("20");
  const [order, setOrder] = useState<Orders>("asc");
  const [style, setStyle] = useState<"list" | "grid">("list");

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedPerspectives, setSelectedPerspectives] = useState<string[]>(
    []
  );

  const createToggle =
    (
      setter: React.Dispatch<React.SetStateAction<string[]>>,
      currentValues: string[]
    ) =>
    (value: string) => {
      const newValues = currentValues.includes(value) ? [] : [value];
      setter(newValues);
      setPage(1);
    };

  const mapToObjects = (list: string[], selected: string[]): Option[] =>
    list.map((item) => ({
      name: item,
      id: item,
      value: item,
      checked: selected.includes(item),
    }));

  const value = {
    name,
    setName,
    franchises,
    setFranchises,
    developers,
    setDevelopers,
    summary,
    setSummary,
    usersScore,
    setUsersScore,
    releaseDate,
    setReleaseDate,
    publisher,
    setPublisher,
    sortBy,
    setSortBy,
    page,
    setPage,
    take,
    setTake,
    order,
    setOrder,
    style,
    setStyle,
    genres: mapToObjects(genresList, selectedGenres),
    platforms: mapToObjects(platformsList, selectedPlatforms),
    modes: mapToObjects(modesList, selectedModes),
    themes: mapToObjects(themesList, selectedThemes),
    playerPerspective: mapToObjects(
      playerPerspectiveList,
      selectedPerspectives
    ),
    toggleGenre: createToggle(setSelectedGenres, selectedGenres),
    togglePlatform: createToggle(setSelectedPlatforms, selectedPlatforms),
    toggleMode: createToggle(setSelectedModes, selectedModes),
    toggleTheme: createToggle(setSelectedThemes, selectedThemes),
    togglePerspective: createToggle(
      setSelectedPerspectives,
      selectedPerspectives
    ),
  };

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};
