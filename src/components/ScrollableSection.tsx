import React from "react";

type ScrollableSectionProps = {
  children: React.ReactNode;
  containerHeight: number;
  gap: number;
  direction: "row" | "column";
};

function ScrollableSection({
  children,
  gap,
  direction,
  containerHeight,
}: ScrollableSectionProps) {
  return (
    <section
      style={{
        maxHeight: `${containerHeight}px`,
        flexDirection: `${direction}`,
        gap: `${gap}px`,
      }}
      className={`overflow-y-scroll flex`}
    >
      {children}
    </section>
  );
}

export default ScrollableSection;
