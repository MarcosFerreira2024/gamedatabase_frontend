import React, { useContext, useState, useEffect } from "react";
import Button from "./buttons/Button";
import Input, { type InputTypes } from "./ui/Input";
import CheckBoxList from "./CheckBoxList";
import ScrollableSection from "./ScrollableSection";
import Accordion from "./Accordion";
import { SidebarContext } from "../contexts/SidebarContext";
import { AnimatePresence, motion } from "framer-motion";
import { QueryContext } from "../contexts/QueryContext";

type SidebarProps = { closeModal: () => void; isSidebarOpen: boolean };

function Detail() {
  return <div className="w-full h-[1px] bg-stone-900"></div>;
}

// ... (Interfaces can remain the same)
interface FilterItem {
  id: string;
  name: string;
  value: string;
  checked: boolean;
}
interface FilterSections {
  title: string;
  dataKey: keyof FiltersData;
  height: number;
}
interface FiltersData {
  genres: FilterItem[];
  themes: FilterItem[];
  platforms: FilterItem[];
  modes: FilterItem[];
  playerPerspective: FilterItem[];
}
interface ToggleMap {
  [key: string]: (selected: string) => void;
}

const filterSections: FilterSections[] = [
  { title: "Generos", dataKey: "genres", height: 152 },
  { title: "Temas", dataKey: "themes", height: 152 },
  { title: "Plataformas", dataKey: "platforms", height: 152 },
  { title: "Modos", dataKey: "modes", height: 152 },
  { title: "Perspectivas", dataKey: "playerPerspective", height: 152 },
];

function Sidebar({ closeModal, isSidebarOpen }: SidebarProps) {
  const queryCtx = useContext(QueryContext);
  const { handleToggleAccordion, open } = useContext(SidebarContext);

  const [localName, setLocalName] = useState(queryCtx.name);
  const [localFranchises, setLocalFranchises] = useState(queryCtx.franchises);
  const [localDevelopers, setLocalDevelopers] = useState(queryCtx.developers);
  const [localSummary, setLocalSummary] = useState(queryCtx.summary);
  const [localPublisher, setLocalPublisher] = useState(queryCtx.publisher);
  const [localReleaseDate, setLocalReleaseDate] = useState(
    queryCtx.releaseDate
  );
  const [localUsersScore, setLocalUsersScore] = useState(queryCtx.usersScore);

  useEffect(() => {
    setLocalName(queryCtx.name);
    setLocalFranchises(queryCtx.franchises);
    setLocalDevelopers(queryCtx.developers);
    setLocalSummary(queryCtx.summary);
    setLocalPublisher(queryCtx.publisher);
    setLocalReleaseDate(queryCtx.releaseDate);
    setLocalUsersScore(queryCtx.usersScore);
  }, [
    queryCtx.name,
    queryCtx.franchises,
    queryCtx.developers,
    queryCtx.summary,
    queryCtx.publisher,
    queryCtx.releaseDate,
    queryCtx.usersScore,
  ]);

  const dataMap: FiltersData = {
    genres: queryCtx.genres,
    themes: queryCtx.themes,
    platforms: queryCtx.platforms,
    modes: queryCtx.modes,
    playerPerspective: queryCtx.playerPerspective,
  };
  const toggleMap: ToggleMap = {
    genres: queryCtx.toggleGenre,
    themes: queryCtx.toggleTheme,
    platforms: queryCtx.togglePlatform,
    modes: queryCtx.toggleMode,
    playerPerspective: queryCtx.togglePerspective,
  };

  const handleApply = () => {
    queryCtx.updateQuery({
      name: localName,
      franchises: localFranchises,
      developers: localDevelopers,
      summary: localSummary,
      publisher: localPublisher,
      releaseDate: localReleaseDate,
      usersScore: localUsersScore,
      page: 1,
    });
  };

  const extraInputs = [
    {
      id: "summary",
      placeholder: "Resumo",
      value: localSummary,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLocalSummary(e.target.value),
    },
    {
      id: "franchises",
      placeholder: "Franquia",
      value: localFranchises,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLocalFranchises(e.target.value),
    },
    {
      id: "developers",
      placeholder: "Desenvolvedor",
      value: localDevelopers,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLocalDevelopers(e.target.value),
    },
    {
      id: "publishers",
      placeholder: "Publicadora",
      value: localPublisher,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLocalPublisher(e.target.value),
    },
    {
      id: "usersScore",
      placeholder: "Pontuação de usuários",
      type: "number",
      value: localUsersScore,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLocalUsersScore(e.target.value),
    },
    {
      id: "releaseDate",
      placeholder: "Data de Lancamento",
      type: "date",
      value: localReleaseDate,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLocalReleaseDate(e.target.value),
    },
    {
      id: "name",
      placeholder: "Nome",
      value: localName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLocalName(e.target.value),
    },
  ];

  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="sidebar"
            layout
            initial={{ transform: "translateX(-100%)" }}
            animate={{ transform: "translateX(0)" }}
            exit={{
              transform: "translateX(-100%)",
              display: "none",
              transition: { duration: 0, ease: "easeInOut" },
              pointerEvents: "none",
              cursor: "none",
              position: "absolute",
            }}
            className="max-w-[242px] border-r-1 dark:border-stone-900 w-full flex flex-col gap-4 h-screen py-4 px-6 bg-stone-950"
          >
            <Button
              icon="/icons/filter.svg"
              iconSize={16}
              size="sm"
              order="textFirst"
              variant="dark"
              onClick={closeModal}
            >
              Esconder Filtros
            </Button>

            <Detail />

            {filterSections.map(({ title, dataKey, height }) => (
              <React.Fragment key={dataKey}>
                <Accordion
                  handleToggleAccordion={handleToggleAccordion}
                  open={open}
                  title={title}
                >
                  <ScrollableSection
                    gap={8}
                    direction="column"
                    containerHeight={height}
                  >
                    <CheckBoxList
                      onChangeHandler={toggleMap[dataKey]}
                      data={dataMap[dataKey]}
                    />
                  </ScrollableSection>
                </Accordion>
                <Detail />
              </React.Fragment>
            ))}

            <Accordion
              handleToggleAccordion={handleToggleAccordion}
              open={open}
              title="Extra"
            >
              <ScrollableSection
                direction="column"
                gap={8}
                containerHeight={190}
              >
                {extraInputs.map(
                  ({ type, id, placeholder, value, onChange }) => (
                    <Input
                      key={id}
                      id={id}
                      name={id}
                      onChange={onChange}
                      value={value ?? ""}
                      type={(type as InputTypes) ?? "text"}
                      size="sm"
                      variant="dark"
                      placeholder={placeholder}
                    />
                  )
                )}
                <Button onClick={handleApply} size="sm" variant="darkContrast">
                  Aplicar
                </Button>
              </ScrollableSection>
            </Accordion>

            <Detail />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
