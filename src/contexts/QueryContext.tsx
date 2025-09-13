import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

export type Orders = "asc" | "desc";
export type Take = "20" | "40" | "60";

export type Option = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
};

type QueryContextType = {
  genres: Option[];
  platforms: Option[];
  modes: Option[];
  themes: Option[];
  playerPerspective: Option[];
  toggleGenre: (genre: string) => void;
  togglePlatform: (platform: string) => void;
  toggleMode: (mode: string) => void;
  toggleTheme: (theme: string) => void;
  togglePerspective: (perspective: string) => void;
  getUrl: () => string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  franchises: string;
  setFranchises: React.Dispatch<React.SetStateAction<string>>;
  developers: string;
  setDevelopers: React.Dispatch<React.SetStateAction<string>>;
  summary: string;
  setSummary: React.Dispatch<React.SetStateAction<string>>;
  usersScore: string;
  setUsersScore: React.Dispatch<React.SetStateAction<string>>;
  releaseDate: string;
  setReleaseDate: React.Dispatch<React.SetStateAction<string>>;
  publisher: string;
  setPublisher: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  take: Take;
  setTake: React.Dispatch<React.SetStateAction<Take>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  order: Orders;
  setOrder: React.Dispatch<React.SetStateAction<Orders>>;
  style: "list" | "grid";
  setStyle: React.Dispatch<React.SetStateAction<"list" | "grid">>;
};

const QueryContext = createContext<QueryContextType>({} as QueryContextType);

export { QueryContext };

type QueryProviderProps = { children: ReactNode };

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const genresList = [
    "Pinball",
    "Adventure",
    "Indie",
    "Arcade",
    "Visual Novel",
    "Card & Board Game",
    "MOBA",
    "Point-and-click",
    "Fighting",
    "Shooter",
    "Music",
    "Platform",
    "Puzzle",
    "Racing",
    "Real Time Strategy (RTS)",
    "Role-playing (RPG)",
    "Simulator",
    "Sport",
    "Strategy",
    "Turn-based strategy (TBS)",
    "Tactical",
    "Hack and slash/Beat 'em up",
    "Quiz/Trivia",
  ];

  const platformsList = [
    "PC (Windows)",
    "Android",
    "iOS",
    "PlayStation",
    "PlayStation 2",
    "PlayStation 3",
    "PlayStation 4",
    "PlayStation Vita",
    "Xbox (original)",
    "Xbox 360",
    "Xbox One",
    "Nintendo DS",
    "Nintendo 3DS",
    "Wii",
    "Wii U",
    "Arcade",
    "Nintendo Entertainment System (NES)",
    "Super Nintendo (SNES)",
    "Dreamcast",
  ];

  const modesList = [
    "Single player",
    "Multiplayer",
    "Co-op",
    "Split screen",
    "Massively Multiplayer (MMO)",
    "Battle Royale",
    "Online multiplayer",
    "Local multiplayer",
    "Campaign",
    "Sandbox",
  ];

  const themesList = [
    "Action",
    "Fantasy",
    "Science fiction",
    "Horror",
    "Thriller",
    "Survival",
    "Historical",
    "Stealth",
    "Comedy",
    "Business",
    "Drama",
    "Non-fiction",
    "Sandbox",
    "Educational",
    "Kids",
    "Open world",
    "Warfare",
    "Party",
    "4X (explore, expand, exploit, and exterminate)",
    "Erotic",
    "Mystery",
    "Romance",
  ];

  const playerPerspectiveList = [
    "First person",
    "Third person",
    "Bird view / Isometric",
    "Side view",
    "Text",
    "Virtual Reality",
  ];

  const getInitialStateFromUrl = () => {
    const searchParams = new URLSearchParams(location.search);

    const getArrayFromUrl = (key: string): string[] => {
      return searchParams.get(key)?.split(",").filter(Boolean) || [];
    };

    const getStringFromUrl = (key: string): string => {
      return searchParams.get(key) || "";
    };

    const getNumberFromUrl = (key: string, defaultValue: number): number => {
      const value = searchParams.get(key);
      return value ? Number(value) : defaultValue;
    };

    const getTakeFromUrl = (): Take => {
      const value = searchParams.get("take");
      return value === "20" || value === "40" || value === "60" ? value : "20";
    };

    const getOrderFromUrl = (): Orders => {
      const value = searchParams.get("order");
      return value === "asc" || value === "desc" ? value : "asc";
    };

    const getStyleFromUrl = (): "list" | "grid" => {
      const value = searchParams.get("style");
      return value === "grid" ? "grid" : "list";
    };

    return {
      selectedGenres: getArrayFromUrl("genres"),
      selectedPlatforms: getArrayFromUrl("platforms"),
      selectedModes: getArrayFromUrl("modes"),
      selectedThemes: getArrayFromUrl("themes"),
      selectedPerspectives: getArrayFromUrl("playerPerspectives"),
      name: getStringFromUrl("name"),
      franchises: getStringFromUrl("franchises"),
      developers: getStringFromUrl("developers"),
      summary: getStringFromUrl("summary"),
      usersScore: getStringFromUrl("usersScore"),
      releaseDate: getStringFromUrl("releaseDate"),
      publisher: getStringFromUrl("publisher"),
      style: getStyleFromUrl(),
      order: getOrderFromUrl(),
      take: getTakeFromUrl(),
      sortBy: getStringFromUrl("sortBy") || "name",
      page: getNumberFromUrl("page", 1),
    };
  };

  const initialState = getInitialStateFromUrl();

  const [selectedGenres, setSelectedGenres] = useState<string[]>(
    initialState.selectedGenres
  );
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(
    initialState.selectedPlatforms
  );
  const [selectedModes, setSelectedModes] = useState<string[]>(
    initialState.selectedModes
  );
  const [selectedThemes, setSelectedThemes] = useState<string[]>(
    initialState.selectedThemes
  );
  const [selectedPerspectives, setSelectedPerspectives] = useState<string[]>(
    initialState.selectedPerspectives
  );

  const [franchises, setFranchises] = useState<string>(initialState.franchises);
  const [name, setName] = useState<string>(initialState.name);
  const [developers, setDevelopers] = useState<string>(initialState.developers);
  const [summary, setSummary] = useState<string>(initialState.summary);
  const [usersScore, setUsersScore] = useState<string>(initialState.usersScore);
  const [releaseDate, setReleaseDate] = useState<string>(
    initialState.releaseDate
  );
  const [publisher, setPublisher] = useState<string>(initialState.publisher);

  const [page, setPage] = useState<number>(initialState.page);
  const [take, setTake] = useState<Take>(initialState.take);
  const [order, setOrder] = useState<Orders>(initialState.order);
  const [sortBy, setSortBy] = useState<string>(initialState.sortBy);

  const [style, setStyle] = useState<"list" | "grid">(initialState.style);

  const mapToObjects = (list: string[], selected: string[]): Option[] =>
    list.map((item) => ({
      name: item,
      id: item,
      value: item,
      checked: selected.includes(item),
    }));

  const toggleSingleSelection = (
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(item)) {
      setSelected([]);
    } else {
      setSelected([item]);
    }
  };

  const getUrl = useCallback(() => {
    const query = [
      `style=${style}`,
      `name=${name}`,
      `genres=${selectedGenres.join(",")}`,
      `platforms=${selectedPlatforms.join(",")}`,
      `modes=${selectedModes.join(",")}`,
      `themes=${selectedThemes.join(",")}`,
      `playerPerspectives=${selectedPerspectives.join(",")}`,
      `franchises=${franchises}`,
      `developers=${developers}`,
      `summary=${summary}`,
      `usersScore=${usersScore}`,
      `releaseDate=${releaseDate}`,
      `publisher=${publisher}`,
      `sortBy=${sortBy}`,
      `order=${order}`,
      `take=${take}`,
      `page=${page}`,
    ].join("&");

    return `/home/games?${query}`;
  }, [
    style,
    name,
    selectedGenres,
    selectedPlatforms,
    selectedModes,
    selectedThemes,
    selectedPerspectives,
    franchises,
    developers,
    summary,
    usersScore,
    releaseDate,
    publisher,
    sortBy,
    order,
    take,
    page,
  ]);

  useEffect(() => {
    navigate(getUrl());
  }, [
    style,
    name,
    selectedGenres,
    selectedPlatforms,
    selectedModes,
    selectedThemes,
    selectedPerspectives,
    franchises,
    developers,
    summary,
    usersScore,
    releaseDate,
    publisher,
    sortBy,
    order,
    take,
    page,
    getUrl,
    navigate,
  ]);

  return (
    <QueryContext.Provider
      value={{
        genres: mapToObjects(genresList, selectedGenres),
        platforms: mapToObjects(platformsList, selectedPlatforms),
        modes: mapToObjects(modesList, selectedModes),
        themes: mapToObjects(themesList, selectedThemes),
        playerPerspective: mapToObjects(
          playerPerspectiveList,
          selectedPerspectives
        ),
        toggleGenre: (genre) =>
          toggleSingleSelection(genre, selectedGenres, setSelectedGenres),
        togglePlatform: (platform) =>
          toggleSingleSelection(
            platform,
            selectedPlatforms,
            setSelectedPlatforms
          ),
        toggleMode: (mode) =>
          toggleSingleSelection(mode, selectedModes, setSelectedModes),
        toggleTheme: (theme) =>
          toggleSingleSelection(theme, selectedThemes, setSelectedThemes),
        togglePerspective: (perspective) =>
          toggleSingleSelection(
            perspective,
            selectedPerspectives,
            setSelectedPerspectives
          ),
        getUrl,
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
        page,
        setPage,
        take,
        setTake,
        sortBy,
        setSortBy,
        order,
        setOrder,
        style,
        setStyle,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};
