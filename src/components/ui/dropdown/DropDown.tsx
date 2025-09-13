import Button from "../../buttons/Button";
import { AnimatePresence, motion } from "framer-motion";
import DropDownList, { type DropDownListProps } from "./DropDownList";

type DropDownProps<T extends string> = {
  selectedValue: T;
  data: DropDownListProps<T>["data"];
  setSelected: (value: T) => void;
  isOpen: boolean;
  displayValue?: boolean;
  icon?: string;
  iconSize?: number;
  onToggle: () => void;
};

function DropDown<T extends string>({
  selectedValue,
  data,
  displayValue,
  icon,
  iconSize,
  setSelected,
  isOpen,
  onToggle,
}: DropDownProps<T>) {
  return (
    <div className="relative">
      {displayValue === false ? (
        <Button
          size="xs"
          icon={icon}
          iconSize={iconSize}
          onClick={onToggle}
        ></Button>
      ) : (
        <Button
          onClick={onToggle}
          size="xs"
          icon="/icons/chevrons-up-down.svg"
          iconSize={16}
        >
          <span>
            {data.find((item) => item.dataValue === selectedValue)?.value ||
              selectedValue}
          </span>
        </Button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-10 right-0 mt-2 w-[200px] rounded-md border dark:border-stone-900 border-stone-200 
                       dark:bg-stone-950 bg-stone-100 shadow-lg select-none text-sm text-stone-500"
          >
            <DropDownList<T>
              data={data}
              setSelected={setSelected}
              selected={selectedValue}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropDown;
