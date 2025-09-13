import { useLocation } from "react-router-dom";

function Breadcrumb() {
  const path = useLocation();

  const parts = path.pathname.split("/").filter(Boolean);

  return (
    <div className="flex  ">
      {parts.map((part, i) => (
        <span
          key={i}
          className="flex   text-xs dark:text-stone-300  text-stone-500"
        >
          {i < parts.length - 1 && (
            <a href={`/${parts.slice(0, i + 1).join("/")}`}>
              {part.charAt(0).toUpperCase() + part.slice(1)}
            </a>
          )}
          {
            <span className="flex   text-xs dark:text-stone-300 text-stone-500">
              {i === parts.length - 1 &&
                part.charAt(0).toUpperCase() + part.slice(1)}
            </span>
          }
          {i < parts.length - 1 && (
            <img src="/icons/chevron-right.svg " className="w-4 h-4" />
          )}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;
