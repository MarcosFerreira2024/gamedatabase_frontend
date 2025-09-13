import DropdownItem from "./DropdownItem";

export type DropDownListProps<T extends string> = {
  data: {
    value: string;
    dataValue: T;
  }[];
  selected: T;
  setSelected: (value: T) => void;
};

function DropDownList<T extends string>({
  data,
  selected,
  setSelected,
}: DropDownListProps<T>) {
  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
        <DropdownItem<T>
          key={index}
          value={item.value}
          dataValue={item.dataValue}
          selected={selected === item.dataValue}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

export default DropDownList;
