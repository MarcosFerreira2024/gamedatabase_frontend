import React from "react";
import { variants } from "./ButtonBase";

type JustifyContent =
  | "normal"
  | "flex-start"
  | "flex-end"
  | "center"
  | "left"
  | "right"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "start"
  | "end"
  | "safe center"
  | "unsafe center";

type ButtonProps = {
  icon?: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  order?: "iconFirst" | "textFirst";
  iconSize?: number;
  className?: string;
  width?: number;
  variant?: "light" | "dark";
  justify?: JustifyContent;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  icon,
  size,
  children,
  order,
  width,
  iconSize,
  className,
  justify = "center",
  variant = "dark",
  ...rest
}: ButtonProps) {
  const justifyMap: Record<JustifyContent, string> = {
    normal: "normal",
    "flex-start": "flex-start",
    "flex-end": "flex-end",
    center: "center",
    left: "left",
    right: "right",
    "space-between": "space-between",
    "space-around": "space-around",
    "space-evenly": "space-evenly",
    stretch: "stretch",
    start: "start",
    end: "end",
    "safe center": "safe center",
    "unsafe center": "unsafe center",
  };

  const sizes = {
    xs: {
      height: 28,
      padding: 8,
    },
    sm: {
      height: 32,
      padding: 12,
    },
    md: {
      height: 36,
      padding: 12,
    },
    lg: {
      height: 40,
      padding: 12,
    },
    xl: {
      height: 50,
      padding: 12,
    },
  };

  const textSizes = {
    xs: "12px",
    sm: "12px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  };

  const orders = {
    iconFirst: "flex-row-reverse",
    textFirst: "flex-row",
  };

  if (!order) order = "textFirst";

  return (
    <button
      {...rest}
      style={{
        minHeight: `${sizes[size].height}px`,
        maxHeight: `${sizes[size].height}px`,
        width: `${width}px`,
        paddingLeft: `${sizes[size].padding}px`,
        paddingRight: `${sizes[size].padding}px`,
        cursor: `pointer`,
        justifyContent: justifyMap[justify],
      }}
      className={`${sizes[size]} ${variants[variant]} ${orders[order]} ${className}   rounded-xl    w-full  flex items-center gap-2`}
    >
      {children && (
        <p className={`text-nowrap  ${textSizes[size]}`}>{children}</p>
      )}
      {icon ? (
        <img
          src={icon}
          style={{
            minWidth: `${iconSize}px`,
            minHeight: `${iconSize}px`,
            maxWidth: `${iconSize}px`,
            maxHeight: `${iconSize}px`,
          }}
        />
      ) : null}
    </button>
  );
}

export default Button;
