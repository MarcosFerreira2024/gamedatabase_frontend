// Selector.tsx
type SelectorProps = {
  activeSection: number;
  handleSelection: (index: number) => void;
  index: number;
  name: string;
};

export default function Selector({
  activeSection,
  handleSelection,
  index,
  name,
}: SelectorProps) {
  return (
    <h1
      onClick={() => handleSelection(index)}
      className={`select-none text-stone-950 dark:text-stone-100 ${
        activeSection === index ? "opacity-50" : "cursor-pointer"
      }`}
    >
      {name}
    </h1>
  );
}
