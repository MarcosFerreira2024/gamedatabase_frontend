import React, { useContext } from "react";
import Breadcrumb from "./Breadcrumb";
import Button from "./buttons/Button";
import DropDown from "./ui/dropdown/DropDown";
import { QueryContext } from "../contexts/QueryContext";
import { SidebarContext } from "../contexts/SidebarContext";

type SortSectionProps = {
  searchLength: number;
  showSidebarButton?: boolean;
};

function SortSection({
  searchLength,
  showSidebarButton = true,
}: SortSectionProps) {
  const sidebarCtx = useContext(SidebarContext);

  const isSidebarOpen = sidebarCtx ? sidebarCtx.sideBarVisibility : false;
  const openSidebar = sidebarCtx
    ? () => sidebarCtx.setSideBarVisibility(true)
    : undefined;

  const { setSortBy, take, sortBy, order, setOrder, setTake, setStyle, style } =
    useContext(QueryContext);

  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const handleToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="w-full">
      <div
        style={{
          paddingLeft: isSidebarOpen ? "16px" : "24px",
          paddingRight: isSidebarOpen ? "16px" : "24px",
        }}
        className="pt-4 flex w-full"
      >
        <div className="flex gap-4 w-full flex-col">
          <Breadcrumb />

          <div className="flex relative">
            <p className="text-xs dark:text-stone-300 text-stone-500">
              <span>{searchLength}</span> jogos encontrados
            </p>
            <div className="flex gap-2 absolute right-0">
              <DropDown
                selectedValue={sortBy}
                setSelected={setSortBy}
                isOpen={openDropdown === "sortBy"}
                onToggle={() => handleToggle("sortBy")}
                data={[
                  { dataValue: "name", value: "Nome" },
                  { dataValue: "rating", value: "Classificação" },
                  { dataValue: "release_date", value: "Data de lançamento" },
                ]}
              />
              <DropDown
                selectedValue={take}
                setSelected={setTake}
                isOpen={openDropdown === "take"}
                onToggle={() => handleToggle("take")}
                data={[
                  { dataValue: "20", value: "20" },
                  { dataValue: "40", value: "40" },
                  { dataValue: "60", value: "60" },
                ]}
              />
              <DropDown
                selectedValue={order}
                setSelected={setOrder}
                isOpen={openDropdown === "order"}
                onToggle={() => handleToggle("order")}
                data={[
                  { dataValue: "asc", value: "Ascendente" },
                  { dataValue: "desc", value: "Descendente" },
                ]}
              />
              <DropDown
                displayValue={false}
                iconSize={16}
                icon="/icons/grid.svg"
                selectedValue={style}
                setSelected={setStyle}
                isOpen={openDropdown === "style"}
                onToggle={() => handleToggle("style")}
                data={[
                  { dataValue: "list", value: "Lista" },
                  { dataValue: "grid", value: "Grid" },
                ]}
              />
            </div>
          </div>

          {showSidebarButton && sidebarCtx && !isSidebarOpen && (
            <Button
              holdContent
              icon="/icons/filter.svg"
              iconSize={16}
              size="xs"
              onClick={openSidebar}
              justify="start"
            >
              Mostrar Filtros
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SortSection;
