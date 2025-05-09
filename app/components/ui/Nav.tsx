import React from "react";
import { motion } from "motion/react";

const Nav = ({
  currPage,
  onChangePage,
}: {
  currPage: number;
  onChangePage: (delta: number) => void;
}) => {
  // first page
  if (currPage === 0) {
    return (
      <div className="flex w-full items-center justify-center h-[10dvh]">
        <motion.button
          className="bg-white/10 w-16 h-16 rounded-full"
          whileHover={{ cursor: "pointer", scale: 1.05 }}
          onClick={() => onChangePage(1)}
        ></motion.button>
      </div>
    );
  }
  // last page
  else if (currPage === 9) {
    return (
      <div className="flex w-full items-center justify-center h-[10dvh]">
        <motion.button
          className="bg-white/10 w-16 h-16 rounded-full"
          whileHover={{ cursor: "pointer", scale: 1.05 }}
          onClick={() => onChangePage(-1)}
        ></motion.button>
      </div>
    );
  } else {
    return (
      <div className="flex w-full justify-between h-[10dvh] px-2">
        <motion.button
          className="bg-white/10 w-16 h-16 rounded-full"
          whileHover={{ cursor: "pointer", scale: 1.05 }}
          onClick={() => onChangePage(-1)}
        ></motion.button>

        <motion.button
          className="bg-white/10 w-16 h-16 rounded-full"
          whileHover={{ cursor: "pointer", scale: 1.05 }}
          onClick={() => onChangePage(1)}
        ></motion.button>
      </div>
    );
  }
};

export default Nav;
