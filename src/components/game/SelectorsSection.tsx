import SelectorsList from "./Selectorslist";

function SelectorsSection({
  activeSection,
  handleSelection,
  sectionNames,
}: {
  activeSection: number;
  sectionNames: string[];
  handleSelection: (section: number) => void;
}) {
  return (
    <div className="mt-10">
      <SelectorsList
        activeSection={activeSection}
        handleSelection={handleSelection}
        names={sectionNames}
      />
    </div>
  );
}

export default SelectorsSection;
