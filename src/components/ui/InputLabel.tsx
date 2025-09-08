import React from "react";
import Input from "./Input";

export type InputLabelProps = {
  name: string;
  label: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: "text" | "email" | "password";
  variant: "light" | "dark" | "darkContrast";
  size: "sm" | "md" | "lg" | "xl";
  placeholder?: string;
};

export default function InputLabel({
  name,
  label,
  id,
  onChange,
  value,
  type,
  variant,
  size,
  placeholder,
}: InputLabelProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-stone-950 dark:text-stone-200" htmlFor={name}>
        {label}
      </label>
      <Input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        variant={variant}
        size={size}
        placeholder={placeholder}
      />
    </div>
  );
}
