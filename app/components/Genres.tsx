"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const Genre = ({ genre }: { genre: string }) => {
  const [active, setActive] = useState(false);

  return (
    <motion.button
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
      {genre}
    </motion.button>
  );
};

const genres = [
  "bebop",
  "techno",
  "pop rock",
  "classical",
  "grunge",
  "romantic",
  "country",
  "opera",
  "vaporwave",
  "rock",
  "reggaeton",
  "metal",
  "bachata",
  "baroque",
  "dubstep",
  "j-pop",
  "lofi",
  "banda",
  "punk",
  "edm",
  "latino pop",
  "hardcore",
  "electropop",
  "alternative",
  "salsa",
  "rap/hip-hop",
  "k-pop",
  "video game music",
  "emo",
  "acoustic",
  "pop punk",
  "rhythm & blues",
  "phonk",
  "bedroom pop",
  "cumbia",
  "jazz",
  "hyperpop",
  "funk",
  "folk",
  "pop",
];

const Genres = ({
  onPageChange,
}: {
  onPageChange: (delta: number) => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen-xl">
      <p className="text-4xl font-semibold text-neutral-200">
        What genres do you like?
      </p>

      <div className="flex flex-wrap justify-around gap-12 px-16 mt-24">
        {genres.map((g, i) => (
          <Genre key={i} genre={g} />
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

export default Genres;
