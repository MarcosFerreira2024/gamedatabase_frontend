import Mainlayout from "../layout/Mainlayout";
import SortSection from "../components/SortSection";

function Search() {
  return (
    <Mainlayout>
      <SortSection showSidebarButton={false} searchLength={0} />
    </Mainlayout>
  );
}

export default Search;
