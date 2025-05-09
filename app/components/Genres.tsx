"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const Genre = ({ genre }: { genre: string }) => {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      className="rounded-xl px-6 py-4 
      text-lg text-neutral-400
      backdrop-blur-lg border border-neutral-800"
      whileHover={{ cursor: "pointer", scale: 1.05 }}
      animate={
        active
          ? { background: "rgba(255, 255, 255, 0.1)", color: "#e5e5e5" }
          : {}
      }
      onClick={() => setActive(!active)}
    >
      {genre}
    </motion.button>
  );
};

const genres = [
  {
    genre: "Pop",
    subGenres: [
      "teen",
      "j-pop",
      "k-pop",
      "bedroom pop",
      "hyperpop",
      "bubblegum",
      "classic",
      "glam",
    ],
  },
  {
    genre: "Rock",
    subGenres: [
      "pop-rock",
      "punk",
      "emo",
      "grunge",
      "alternative",
      "metal",
      "screamo",
      "hip-hop",
    ],
  },
  {
    genre: "Rap",
    subGenres: ["drill", "hip-hop", "trap", "emo rap", "phonk", "underground"],
  },
  {
    genre: "Electronic",
    subGenres: [
      "house",
      "EDM",
      "techno",
      "drum & bass",
      "dubstep",
      "vaporwave",
      "lo-fi",
    ],
  },
  {
    genre: "Latino",
    subGenres: [
      "reggaeton",
      "bachata",
      "latin pop",
      "banda",
      "cumbia",
      "salsa",
    ],
  },
  {
    genre: "Classical",
    subGenres: [
      "baroque",
      "romantic",
      "symphony",
      "ballet",
      "opera",
      "concerto",
    ],
  },
  {
    genre: "Country",
    subGenres: [
      "country pop",
      "bluegrass",
      "folk",
      "honky-tonk",
      "country rock",
      "rockabilly",
      "neotraditional",
    ],
  },
  {
    genre: "Jazz",
    subGenres: [
      "cool",
      "bebop",
      "free",
      "swing",
      "fusion",
      "hard bop",
      "gypsy",
      "latin",
    ],
  },
  {
    genre: "Rhythm & Blues",
    subGenres: [
      "soul",
      "funk",
      "contemporary ",
      "alternative",
      "classic",
      "neo-soul",
      "smooth",
      "blues",
    ],
  },
  {
    genre: "Folk",
    subGenres: [
      "folk rock",
      "acoustic",
      "indie",
      "contemporary ",
      "traditional",
      "protest / political",
      "indie",
      "celtic",
    ],
  },
];

const Genres = () => {
  const [mainGenre, setMainGenre] = useState<number | null>(null);
  // const [subGenres, setSubGenres] = useState<string[] | []>([]);

  return (
    <div className="flex flex-col items-center w-full h-[80dvh]">
      <p className="text-4xl font-semibold text-neutral-300 my-8">
        What genres are you looking for?
      </p>

      {mainGenre === null ? (
        <div
          className="w-full h-full p-4 
        grid grid-cols-4 grid-rows-3 gap-4"
        >
          {genres.map((g, i) => (
            <motion.button
              key={i}
              className="p-6 rounded-md
               backdrop-blur-lg
              text-3xl text-center text-neutral-300"
              whileHover={{
                cursor: "pointer",
                background: "rgba(255,255,255, 0.01)",
              }}
              onClick={() => setMainGenre(i)}
            >
              {g.genre}
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-12">
          <p className="text-7xl text-center text-neutral-300 font-medium">
            {genres[mainGenre].genre}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {genres[mainGenre].subGenres.map((s, j) => (
              <Genre key={j} genre={s} />
            ))}
          </div>

          <motion.button
            whileHover={{
              cursor: "pointer",
              scale: 1.05,
              background: "rgba(255, 255, 255, 0.1)",
            }}
            onClick={() => setMainGenre(null)}
          >
            Nevermind.
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Genres;
