"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const Genre = ({ emoji, genre }: { emoji?: string; genre: string }) => {
  // const [active, setActive] = useState(false);

  return (
    <motion.p
      className="rounded-lg backdrop-blur-2xl px-3 py-1
      border border-white/5 text-center text-neutral-300 font-extralight"
      whileHover={{ cursor: "pointer", scale: 1.05 }}
    >
      {genre} {emoji}
    </motion.p>
  );
};

const genres = [
  "pop 🎤",
  "teen",
  "j-pop",
  "k-pop",
  "bedroom pop",
  "hyperpop",
  "bubblegum",
  "classic",
  "glam",
  "pop-rock",
  "punk",
  "emo",
  "grunge",
  "alternative",
  "metal",
  "screamo",
  "hip-hop",

  "rap🗣️",
  "drill",
  "hip-hop",
  "trap",
  "emo rap",
  "phonk",
  "underground",

  "electronic 🪩",
  "house",
  "EDM",
  "techno",
  "drum & bass",
  "dubstep",
  "vaporwave",
  "lo-fi",

  "latino 💃🏻",
  "reggaeton",
  "bachata",
  "latin pop",
  "banda",
  "cumbia",
  "salsa",

  "classical  🎻",
  "baroque",
  "romantic",
  "symphony",
  "ballet",
  "opera",
  "concerto",
  "country 🍺",

  "country pop",
  "bluegrass",
  "folk",
  "honky-tonk",
  "country rock",
  "rockabilly",
  "neotraditional",

  "jazz 🎷",
  "cool",
  "bebop",
  "free",
  "swing",
  "fusion",
  "hard bop",
  "gypsy",
  "latin",

  "soul",
  "r & b 🌃",
  "funk",
  "contemporary ",
  "alternative",
  "classic",
  "neo-soul",
  "smooth",
  "blues",

  "folk 🪕",
  "folk rock",
  "acoustic",
  "indie",
  "contemporary ",
  "traditional",
  "protest / political",
  "indie",
  "celtic",
];

const Genres = () => {
  // const [genre, setGenre] = useState(-1);

  return (
    <div
      className="flex flex-col items-center justify-center  
    w-full max-w-screen-xl"
    >
      <p className="text-4xl font-semibold text-neutral-300">
        What genres are you looking for?
      </p>

      <div className="flex flex-wrap items-center justify-center gap-12">
        {genres.map((g, i) => (
          <Genre key={i} genre={g} />
        ))}
      </div>
    </div>
  );
};

export default Genres;
