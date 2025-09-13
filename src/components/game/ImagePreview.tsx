import React from "react";
import Modal from "../Modal";
import Button from "../buttons/Button";
import { motion } from "framer-motion";

function ImagePreview({
  image,
  setIsPreviewing,
}: {
  image: string;
  setIsPreviewing: React.Dispatch<{ image: string } | null>;
}) {
  return (
    <Modal>
      <motion.div
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="border-1 fixed z-100  right-0 bottom-0 w-screen h-screen border-stone-200 dark:border-stone-900"
      >
        <div className="bg-stone-950 w-full overflow-hidden h-full py-5 px-5 relative flex justify-center items-center">
          <Button
            className="absolute top-10 right-10 "
            holdIcon
            size="sm"
            icon="/icons/close.svg"
            iconSize={24}
            onClick={() => setIsPreviewing(null)}
          ></Button>
          <img
            src={image}
            className=" object-cover w-full h-full  rounded-xl border-1 dark:border-stone-900 border-stone-200 "
          />
        </div>
      </motion.div>
    </Modal>
  );
}

export default ImagePreview;
