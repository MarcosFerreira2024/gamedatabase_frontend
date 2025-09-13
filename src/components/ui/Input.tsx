import React from "react";
import { variants } from "../buttons/ButtonBase";

export type InputTypes = "text" | "email" | "password" | "number";

type InputProps = {
  size?: "sm" | "md" | "lg" | "xl";
  variant: "light" | "dark" | "darkContrast";
  type: InputTypes;
  placeholder?: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function Input({
  size = "xl",
  type = "text",
  id,
  name,
  variant,
  value,
  placeholder,
  onChange,
}: InputProps) {
  const sizes = {
    sm: {
      height: "32px",
    },
    md: {
      height: "36px",
    },
    lg: {
      height: "40px",
    },
    xl: {
      height: "50px",
    },
  };

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={onChange}
      style={{ minHeight: sizes[size].height }}
      className={`w-full px-2 rounded-md text-sm ${variants[variant]}`}
    />
  );
}

export default Input;
