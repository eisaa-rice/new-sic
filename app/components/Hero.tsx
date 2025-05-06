"use client";

import React from "react";
import { motion } from "motion/react";

const Hero = ({ onPageChange }: { onPageChange: (delta: number) => void }) => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen-xl
    "
    >
      <p className="text-7xl font-bold mt-48">New music, just for you.</p>

      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl text-neutral-400 font-semibold mt-24">
          Try for free now and discover what you&apos;ll be jamming out to next.
        </p>

        <motion.button
          className="bg-white/10 w-16 h-16 rounded-full mt-80"
          whileHover={{ cursor: "pointer", scale: 1.05 }}
          onClick={() => onPageChange(1)}
        ></motion.button>

        <p className="text-xl text-neutral-600 mt-6">Get started.</p>
      </div>
    </div>
  );
};

export default Hero;
