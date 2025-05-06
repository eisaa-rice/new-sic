"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const Mood = ({
  mood,
  style,
}: {
  mood: string;
  style?: React.CSSProperties;
}) => {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      style={style}
      className="px-5 py-3 rounded-full
      border border-white/25 backdrop-blur-lg"
      whileHover={{ cursor: "pointer" }}
      animate={
        active
          ? {
              background: "rgba(255, 255, 255, 0.2)",
              scale: 1.05,
            }
          : {}
      }
      onClick={() => setActive(!active)}
    >
      {mood}
    </motion.button>
  );
};

const moods = [
  { mood: "excited", style: {} },
  { mood: "happy", style: {} },
  { mood: "bittersweet", style: {} },
  { mood: "sad", style: {} },
  { mood: "frustrated", style: {} },
  { mood: "mad", style: {} },
];

const Moods = ({ onPageChange }: { onPageChange: (delta: number) => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen-xl">
      <p className="text-4xl font-semibold text-neutral-200">
        What kind of mood are you in?
      </p>

      <div className="flex flex-wrap justify-around gap-12 px-16 mt-24">
        {moods.map((m, i) => (
          <Mood key={i} mood={m.mood} style={m.style} />
        ))}
      </div>

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

export default Moods;
