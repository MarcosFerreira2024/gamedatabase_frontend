import React from "react";
import { motion } from "framer-motion";

export type CheckboxProps = {
  name: string;
  id: string;
  value: string;
  checked: boolean;
  onChangeHandler: (selected: string) => void;
};
function Checkbox({
  id,
  name,
  value,
  onChangeHandler,
  checked,
}: CheckboxProps) {
  const [hover, setHover] = React.useState(false);

  return (
    <motion.div className="flex items-center gap-2  ">
      <input
        checked={checked}
        onChange={() => onChangeHandler(id)}
        className="hidden "
        type="checkbox"
        name={name}
        id={id}
      />
      <label htmlFor={id} className="flex gap-2 items-center">
        <motion.div
          whileTap={{ scale: 0.9 }}
          className={` ${
            checked
              ? "bg-stone-200 dark:bg-stone-400"
              : `${hover && "dark:bg-stone-700 bg-stone-200 "}`
          }  ease-in-out min-w-5.5 min-h-5.5 left-0  border-1 dark:border-stone-900   rounded-sm  `}
        ></motion.div>
        <span
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="dark:text-stone-400 hover:dark:text-stone-300   group select-none text-sm hover:text-stone-400  text-stone-500 "
        >
          {value}
        </span>
      </label>
    </motion.div>
  );
}

export default Checkbox;
