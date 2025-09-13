import React, { useContext } from "react";
import Button from "./buttons/Button";
import Input, { type InputTypes } from "./ui/Input";
import CheckBoxList from "./CheckBoxList";
import ScrollableSection from "./ScrollableSection";
import Accordion from "./Accordion";
import { SidebarContext } from "../contexts/SidebarContext";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { QueryContext } from "../contexts/QueryContext";

type SidebarProps = { closeModal: () => void; isSidebarOpen: boolean };

function Detail() {
  return <div className="w-full h-[1px] bg-stone-900"></div>;
}

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
  const navigate = useNavigate();
  const {
    genres,
    platforms,
    modes,
    playerPerspective,
    themes,
    toggleGenre,
    toggleMode,
    togglePerspective,
    togglePlatform,
    toggleTheme,
    getUrl,
    name,
    setName,
    franchises,
    setFranchises,
    developers,
    setDevelopers,
    summary,
    setSummary,
    publisher,
    setPublisher,
    releaseDate,
    setReleaseDate,
    usersScore,
    setUsersScore,
  } = useContext(QueryContext);

  const { handleToggleAccordion, open } = useContext(SidebarContext);

  const dataMap: FiltersData = {
    genres,
    themes,
    platforms,
    modes,
    playerPerspective,
  };
  const toggleMap: ToggleMap = {
    genres: toggleGenre,
    themes: toggleTheme,
    platforms: togglePlatform,
    modes: toggleMode,
    playerPerspective: togglePerspective,
  };

  const extraInputs = [
    {
      id: "summary",
      placeholder: "Resumo",
      value: summary,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setSummary(e.target.value),
    },
    {
      id: "franchises",
      placeholder: "Franquia",
      value: franchises,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFranchises(e.target.value),
    },
    {
      id: "developers",
      placeholder: "Desenvolvedor",
      value: developers,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setDevelopers(e.target.value),
    },
    {
      id: "publishers",
      placeholder: "Publicadora",
      value: publisher,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPublisher(e.target.value),
    },
    {
      id: "usersScore",
      placeholder: "Pontuação de usuários",
      type: "number",
      value: usersScore,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUsersScore(e.target.value),
    },
    {
      id: "releaseDate",
      placeholder: "Data de Lancamento",
      type: "date",
      value: releaseDate,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setReleaseDate(e.target.value),
    },
    {
      id: "name",
      placeholder: "Nome",
      value: name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value),
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
                <Button
                  onClick={() => {
                    const url = getUrl();
                    navigate(url);
                  }}
                  size="sm"
                  variant="darkContrast"
                >
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
