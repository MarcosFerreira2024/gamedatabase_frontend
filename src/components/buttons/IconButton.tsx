import React from "react";
import { variants } from "./ButtonBase";

type IconButtonProps = {
  icon: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  iconSize?: number;
  className?: string;
  variant?: "light" | "dark";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({
  icon,
  size,
  iconSize = 24,
  className,
  disabled,
  variant = "dark",
  ...rest
}: IconButtonProps) {
  const sizes = {
    xs: {
      size: "28px",
      rounded: "8px",
    },
    sm: {
      size: "32px",
      rounded: "8px",
    },
    md: {
      size: "36px",
      rounded: "8px",
    },
    lg: {
      size: "40px",
      rounded: "12px",
    },
    xl: {
      size: "50px",
      rounded: "12px",
    },
  };

  return (
    <button
      style={{
        minHeight: sizes[size].size,
        maxHeight: sizes[size].size,
        minWidth: sizes[size].size,
        maxWidth: sizes[size].size,
        borderRadius: sizes[size].rounded,
        cursor: "pointer",
      }}
      className={`${variants[variant]} ${className} ${
        disabled && "opacity-50 cursor-default"
      }  justify-center flex items-center`}
      {...rest}
    >
      <img
        src={icon}
        style={{
          width: iconSize,
          height: iconSize,
        }}
      />
    </button>
  );
}
