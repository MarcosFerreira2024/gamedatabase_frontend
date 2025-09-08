import React from "react";
import type { InputLabelProps } from "./InputLabel";
import InputLabel from "./InputLabel";

function InputLabelList({ data }: { data: InputLabelProps[] }) {
  return (
    <>
      {data.map((item, index) => (
        <InputLabel
          key={index}
          name={item.name}
          label={item.label}
          id={item.id}
          onChange={item.onChange}
          value={item.value}
          type={item.type}
          variant={item.variant}
          size={item.size}
          placeholder={item.placeholder}
        />
      ))}
    </>
  );
}

export default InputLabelList;
