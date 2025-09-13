import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto px-6 w-full">{children}</div>;
}

export default Container;
