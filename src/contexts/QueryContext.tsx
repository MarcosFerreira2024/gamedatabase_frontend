import React, {
  createContext,
  useCallback,
  useEffect,
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

type SettableValue = string | number;

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
  name: string;
  setName: (name: string) => void;
  franchises: string;
  setFranchises: (franchises: string) => void;
  developers: string;
  setDevelopers: (developers: string) => void;
  summary: string;
  setSummary: (summary: string) => void;
  usersScore: string;
  setUsersScore: (usersScore: string) => void;
  releaseDate: string;
  setReleaseDate: (releaseDate: string) => void;
  publisher: string;
  setPublisher: (publisher: string) => void;
  page: number;
  setPage: (page: number) => void;
  take: Take;
  setTake: (take: Take) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  order: Orders;
  setOrder: (order: Orders) => void;
  style: "list" | "grid";
  setStyle: (style: "list" | "grid") => void;
  updateQuery: (newParams: Record<string, SettableValue | string[]>) => void;
};

const QueryContext = createContext<QueryContextType>({} as QueryContextType);

export { QueryContext };

type QueryProviderProps = {
  children: ReactNode;
  basePath: string;
  allowedParams: string[];
};

export const QueryProvider = ({
  children,
  basePath,
  allowedParams,
}: QueryProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

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

  const getParam = (key: string, defaultValue: string = "") => {
    if (!allowedParams.includes(key)) return defaultValue;
    return searchParams.get(key) || defaultValue;
  };

  const name = getParam("name");
  const franchises = getParam("franchises");
  const developers = getParam("developers");
  const summary = getParam("summary");
  const usersScore = getParam("usersScore");
  const releaseDate = getParam("releaseDate");
  const publisher = getParam("publisher");
  const sortBy = getParam("sortBy", "name");
  const page = parseInt(getParam("page", "1"), 10);
  const take = getParam("take", "20") as Take;
  const order = getParam("order", "asc") as Orders;
  const style = getParam("style", "list") as "list" | "grid";

  const selectedGenres = getParam("genres").split(",").filter(Boolean);
  const selectedPlatforms = getParam("platforms").split(",").filter(Boolean);
  const selectedModes = getParam("modes").split(",").filter(Boolean);
  const selectedThemes = getParam("themes").split(",").filter(Boolean);
  const selectedPerspectives = getParam("playerPerspectives")
    .split(",")
    .filter(Boolean);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(location.search);
    let needsUpdate = false;

    const defaults = {
      style: "list",
      take: "20",
      page: "1",
      order: "asc",
      sortBy: "name",
    };

    for (const [key, defaultValue] of Object.entries(defaults)) {
      if (!newSearchParams.has(key) && allowedParams.includes(key)) {
        newSearchParams.set(key, defaultValue);
        needsUpdate = true;
      }
    }

    if (needsUpdate) {
      navigate(`${basePath}?${newSearchParams.toString()}`, { replace: true });
    }
  }, []);

  const updateQuery = useCallback(
    (newParams: Record<string, SettableValue | string[]>) => {
      const newSearchParams = new URLSearchParams(location.search);
      Object.entries(newParams).forEach(([key, value]) => {
        const valueAsString = Array.isArray(value)
          ? value.join(",")
          : String(value);
        if (value !== null && value !== undefined && valueAsString) {
          newSearchParams.set(key, valueAsString);
        } else {
          newSearchParams.delete(key);
        }
      });
      navigate(`${basePath}?${newSearchParams.toString()}`, { replace: true });
    },
    [location.search, navigate, basePath]
  );

  const createSetter =
    (key: string, resetPage: boolean = false) =>
    (value: SettableValue) => {
      const params: Record<string, SettableValue> = { [key]: value };
      if (resetPage) {
        params.page = 1;
      }
      updateQuery(params);
    };

  const createToggle = (key: string) => (value: string) => {
    const current = getParam(key).split(",").filter(Boolean);
    const newValues = current.includes(value) ? [] : [value];
    updateQuery({ [key]: newValues, page: 1 });
  };

  const mapToObjects = (list: string[], selected: string[]): Option[] =>
    list.map((item) => ({
      name: item,
      id: item,
      value: item,
      checked: selected.includes(item),
    }));

  const value: QueryContextType = {
    name,
    franchises,
    developers,
    summary,
    usersScore,
    releaseDate,
    publisher,
    sortBy,
    page,
    take,
    order,
    style,
    genres: mapToObjects(genresList, selectedGenres),
    platforms: mapToObjects(platformsList, selectedPlatforms),
    modes: mapToObjects(modesList, selectedModes),
    themes: mapToObjects(themesList, selectedThemes),
    playerPerspective: mapToObjects(
      playerPerspectiveList,
      selectedPerspectives
    ),
    setName: createSetter("name", true),
    setFranchises: createSetter("franchises", true),
    setDevelopers: createSetter("developers", true),
    setSummary: createSetter("summary", true),
    setUsersScore: createSetter("usersScore", true),
    setReleaseDate: createSetter("releaseDate", true),
    setPublisher: createSetter("publisher", true),
    setSortBy: createSetter("sortBy"),
    setPage: createSetter("page"),
    setTake: createSetter("take"),
    setOrder: createSetter("order"),
    setStyle: createSetter("style"),
    toggleGenre: createToggle("genres"),
    togglePlatform: createToggle("platforms"),
    toggleMode: createToggle("modes"),
    toggleTheme: createToggle("themes"),
    togglePerspective: createToggle("playerPerspectives"),
    updateQuery,
  };

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};
