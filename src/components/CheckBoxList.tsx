import Checkbox from "./ui/Checkbox";

function CheckBoxList({
  data,
  onChangeHandler,
}: {
  data: {
    id: string;
    name: string;
    value: string;
    checked: boolean;
  }[];
  onChangeHandler: (selected: string) => void;
}) {
  return (
    <>
      {data.map((item, index) => (
        <Checkbox
          key={index}
          id={item.id}
          name={item.name}
          value={item.value}
          checked={item.checked}
          onChangeHandler={onChangeHandler}
        />
      ))}
    </>
  );
}

export default CheckBoxList;
