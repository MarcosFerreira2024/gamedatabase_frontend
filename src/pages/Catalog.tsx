import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import SortSection from "../components/SortSection";
import Mainlayout from "../layout/Mainlayout";
import { SidebarContext } from "../contexts/SidebarContext";
import GameCardList from "../components/games/GameCardList";
import { gameCardMock } from "../data/mock/games-mock";
import { motion } from "framer-motion";
function Catalog() {
  const { setSideBarVisibility, sideBarVisibility } =
    useContext(SidebarContext);

  return (
    <>
      <Mainlayout>
        <motion.div className="flex w-full  flex-row ">
          <Sidebar
            isSidebarOpen={sideBarVisibility}
            closeModal={() => setSideBarVisibility(false)}
          />

          <motion.div
            layout
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-col gap-5 w-full"
          >
            <SortSection searchLength={0} />
            <section className="px-4">
              <GameCardList data={gameCardMock} />
            </section>
          </motion.div>
        </motion.div>
      </Mainlayout>
    </>
  );
}

export default Catalog;
