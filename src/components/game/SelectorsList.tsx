// SelectorsList.tsx
import Selector from "./Selector";

export default function SelectorsList({
  activeSection,
  handleSelection,
  names,
}: {
  activeSection: number;
  handleSelection: (index: number) => void;
  names: string[];
}) {
  return (
    <div className="flex justify-evenly items-center gap-4 w-full h-[82px] border-1 dark:border-stone-900">
      {names.map((name, index) => (
        <Selector
          key={name}
          index={index}
          name={name}
          activeSection={activeSection}
          handleSelection={handleSelection}
        />
      ))}
    </div>
  );
}
