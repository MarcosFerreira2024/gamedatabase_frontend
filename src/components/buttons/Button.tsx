import React from "react";
import { variants } from "./ButtonBase";

import { motion } from "framer-motion";

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
  children?: React.ReactNode;
  order?: "iconFirst" | "textFirst";
  iconSize?: number;
  className?: string;
  holdIcon?: boolean;
  holdContent?: boolean;
  width?: number;
  variant?: "light" | "dark" | "darkContrast";
  justify?: JustifyContent;
} & React.ComponentProps<typeof motion.button>;

function Button({
  icon,
  size,
  children,
  holdContent,
  holdIcon,
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
      borderRadius: 6,
    },
    sm: {
      height: 32,
      padding: 12,
      borderRadius: 6,
    },
    md: {
      height: 36,
      padding: 12,
      borderRadius: 12,
    },
    lg: {
      height: 40,
      padding: 12,
      borderRadius: 12,
    },
    xl: {
      height: 50,
      padding: 12,
      borderRadius: 12,
    },
  };

  const textSizes = {
    xs: "12px",
    sm: "16px",
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
    <motion.button
      whileTap={{ scale: 0.95 }}
      {...rest}
      style={{
        maxWidth: `${
          (holdContent && "max-content") ||
          (holdIcon && `${sizes[size].height}px`)
        }`,

        minHeight: `${sizes[size].height}px`,
        maxHeight: `${sizes[size].height}px`,
        borderRadius: `${sizes[size].borderRadius}px`,
        width: `${width}px`,
        paddingLeft: `${sizes[size].padding}px`,
        paddingRight: `${sizes[size].padding}px`,
        cursor: `pointer`,
        justifyContent: justifyMap[justify],
      }}
      className={`${sizes[size]} ${variants[variant]} ${orders[order]} ${className}   disabled:opacity-50    w-full  flex items-center gap-2`}
    >
      {children && (
        <p
          style={{ fontSize: `${textSizes[size]}` }}
          className={`text-nowrap  `}
        >
          {children}
        </p>
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
    </motion.button>
  );
}

export default Button;
