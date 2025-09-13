import React from "react";
import { useNavigate } from "react-router-dom";

function Anchor({ children, to }: { children: React.ReactNode; to: string }) {
  const navigate = useNavigate();
  return (
    <a
      onClick={() => navigate(to)}
      className="text-stone-950 text-xs cursor-pointer underline-offset-2 underline dark:text-stone-400"
    >
      {children}
    </a>
  );
}

export default Anchor;
