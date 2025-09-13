import { useState } from "react";
import { useSearch } from "../hooks/useSearch";

function SearchButton() {
  const [inputValue, setInputValue] = useState("");
  const search = useSearch();

  const handleSearch = () => {
    search(inputValue);
  };

  return (
    <div className="relative h-[50px] flex items-center  border-1 border-stone-900 rounded-xl">
      <button
        onClick={handleSearch}
        className="pl-4 pr-2 h-full flex items-center justify-center"
        type="button"
      >
        <img src="/icons/search.svg" className="w-6 h-6" />
      </button>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        type="text"
        id="search"
        placeholder="Search..."
        className="w-full text-stone-50 h-full outline-none bg-transparent"
      />
    </div>
  );
}

export default SearchButton;
