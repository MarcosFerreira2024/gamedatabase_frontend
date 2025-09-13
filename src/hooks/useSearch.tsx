import { useNavigate } from "react-router-dom";

export function useSearch() {
  const navigate = useNavigate();

  const search = (name: string) => {
    if (name) {
      const searchParams = new URLSearchParams({
        name: name,
        style: "list",
        take: "20",
        page: "1",
        order: "asc",
        sortBy: "name"
      });
      navigate(`/home/search?${searchParams.toString()}`);
    }
  };

  return search;
}