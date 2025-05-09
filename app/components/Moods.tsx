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
      className="px-5 py-3 rounded-full text-neutral-400 text-sm
      border border-white/25 backdrop-blur-lg transition-all-"
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
  { mood: "confident", style: {} },
  { mood: "excited", style: {} },
  { mood: "happy", style: {} },
  { mood: "calm", style: {} },
  { mood: "blessed", style: {} },
  { mood: "affectionate", style: {} },

  { mood: "bittersweet", style: {} },
  { mood: "regret", style: {} },
  { mood: "sad", style: {} },
  { mood: "depressed", style: {} },
  { mood: "lonely", style: {} },
  { mood: "heartbroken", style: {} },

  { mood: "frustrated", style: {} },
  { mood: "moody", style: {} },
  { mood: "bored", style: {} },
  { mood: "mad", style: {} },
  { mood: "rebellious", style: {} },
  { mood: "manic", style: {} },
];

const Moods = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className="text-4xl font-semibold text-neutral-300 mt-6 mb-16">
        What kind of vibe are you looking for?
      </p>

      <div className="flex flex-wrap justify-around gap-12 px-16 mt-24">
        {moods.map((m, i) => (
          <Mood key={i} mood={m.mood} style={m.style} />
        ))}
      </div>
    </div>
  );
};

export default Moods;
