export type DropdownItemProps<T extends string> = {
  value: string;
  dataValue: T;
  setSelected: (value: T) => void;
  selected: boolean;
};

function DropdownItem<T extends string>({
  value,
  dataValue,
  setSelected,
  selected,
}: DropdownItemProps<T>) {
  return (
    <button
      data-value={dataValue}
      onClick={() => setSelected(dataValue)}
      className={`${
        selected && "bg-stone-200 dark:bg-stone-900 "
      } hover:text-stone-400  hover:dark:text-stone-300 w-full flex items-center justify-between hover:bg-stone-200 hover:dark:bg-stone-900 px-2 text-left py-2 `}
    >
      {value}

      {selected && <img src="/icons/check.svg" className="w-4 h-4" />}
    </button>
  );
}

export default DropdownItem;
