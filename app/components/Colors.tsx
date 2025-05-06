import React from "react";
import { motion } from "motion/react";

const Colors = ({
  onPageChange,
}: {
  onPageChange: (delta: number) => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen-xl">
      <p className="text-4xl font-semibold text-neutral-300">
        What color are we feeling today?
      </p>

      <div className="flex w-full justify-between mt-24">
        <motion.button
          className="bg-white/10 w-16 h-16 rounded-full"
          whileHover={{ cursor: "pointer", scale: 1.05 }}
          onClick={() => onPageChange(-1)}
        ></motion.button>

        <motion.button
          className="bg-white/10 w-16 h-16 rounded-full"
          whileHover={{ cursor: "pointer", scale: 1.05 }}
          onClick={() => onPageChange(1)}
        ></motion.button>
      </div>
    </div>
  );
};

export default Colors;
