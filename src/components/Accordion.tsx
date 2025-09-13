import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
function Accordion({
  children,
  title,
  handleToggleAccordion,
  open,
}: {
  children: React.ReactNode;
  title: string;
  handleToggleAccordion: (id: string) => void;
  open: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-stone-50">{title}</h1>
        <img
          src="/icons/chevron-up.svg"
          alt={open && open.includes(title) ? "close" : "open"}
          onClick={() => handleToggleAccordion(title)}
          className={`${
            open && open.includes(title) ? "" : "rotate-180"
          } w-4 h-4 duration-300 ease-in-out cursor-pointer`}
        />
      </div>

      <AnimatePresence initial={false}>
        {open && open.includes(title) && (
          <motion.div
            key="content"
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
