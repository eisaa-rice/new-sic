"use client";

import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="max-w-screen-xl
    flex w-full p-8 items-center justify-between"
    >
      <p className="font-bold text-xl">New-sic</p>

      <div className="flex">
        <motion.p
          className="rounded-full px-3 py-1 border border-white/20 text-white/50 text-sm"
          whileHover={{ cursor: "pointer", scale: 1.05 }}
        >
          Share
        </motion.p>
      </div>
    </div>
  );
};

export default Header;
