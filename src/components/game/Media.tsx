import React from "react";
import ImagePreview from "./ImagePreview";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
type MediaProps = {
  data: {
    image: string;
  }[];
};

function Media({ data }: MediaProps) {
  const [isPreviewing, setIsPreviewing] = React.useState<{
    image: string;
  } | null>(null);

  return (
    <>
      <AnimatePresence>
        {isPreviewing && isPreviewing.image && (
          <ImagePreview
            image={isPreviewing.image}
            setIsPreviewing={setIsPreviewing}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        exit={{ height: 0 }}
        className="border-1 dark:border-stone-900   max-w-[1440px] mx-auto rounded-xl"
      >
        <div className="grid grid-cols-5 gap-4 p-4 ">
          {data.map((item) => (
            <div className="">
              <img
                onClick={() => setIsPreviewing(item)}
                src={item.image}
                className="w-full h-full border-1 border-stone-200 dark:border-stone-900  rounded-xl"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Media;
