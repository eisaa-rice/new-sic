"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const Genre = ({
  emoji,
  genre,
  onGenreChange,
  id,
}: {
  emoji: string;
  genre: string;
  onGenreChange: (num: number) => void;
  id: number;
}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-between
   
      h-48 w-48 rounded-full
      border border-white/5"
      whileHover={{ cursor: "pointer", scale: 1.05 }}
      onClick={() => onGenreChange(id)}
    >
      <p className="text-7xl m-auto pt-4">{emoji}</p>

      <p className="text-center text-neutral-300 font-extralight pb-8">
        {genre}
      </p>
    </motion.div>
  );
};

const genres = [
  {
    genre: "Pop",
    emoji: "🎤",
    subGenres: [
      "pop",
      "teen",
      "j-pop",
      "k-pop",
      "bedroom pop",
      "hyperpop",
      "bubblegum",
    ],
  },
  {
    genre: "Rock",
    emoji: "🎸",
    subGenres: [
      "classic",
      "glam",
      "pop-rock",
      "punk",
      "emo",
      "grunge",
      "alternative",
      "metal",
      "screamo",
    ],
  },
  {
    genre: "Hip-hop / Rap",
    emoji: "🗣️",
    subGenres: [
      "rap",
      "drill",
      "hip-hop",
      "trap",
      "emo rap",
      "phonk",
      "underground",
    ],
  },
  {
    genre: "Electronic",
    emoji: "🪩",
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
    genre: "Latin",
    emoji: "💃🏻",
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
    emoji: "🎻",
    subGenres: [
      "baroque",
      "romantic",
      "symphony",
      "ballet",
      "opera",
      "concerto",
      // "orchestral",
    ],
  },
  {
    genre: "Country",
    emoji: "🍺",
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
    emoji: "🎷",
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
    emoji: "🌃",
    subGenres: [
      "soul",
      "r & b",
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
    emoji: "🪕",
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
  const [genre, setGenre] = useState(-1);

  return (
    <div
      className="flex flex-col items-center justify-center  
    w-full max-w-screen-xl"
    >
      <p className="text-4xl font-semibold text-neutral-300">
        {genre === 0
          ? "Any sub-genres in specific?"
          : "What genres are you looking for?"}
      </p>

      {genre === 0 ? (
        <div
          className="flex flex-wrap justify-around gap-12 
      h-full px-16 mt-24"
        >
          <Genre
            genre={genres[0].genre}
            emoji={genres[0].emoji}
            onGenreChange={setGenre}
            id={0}
          />
        </div>
      ) : genre === 1 ? (
        <div
          className="flex flex-wrap justify-around gap-12 
    h-full px-16 mt-24"
        >
          <Genre
            genre={genres[1].genre}
            emoji={genres[1].emoji}
            onGenreChange={setGenre}
            id={1}
          />
        </div>
      ) : (
        <div
          className="flex flex-wrap justify-around gap-12 
      h-full px-16 mt-24"
        >
          {genres.map((g, i) => (
            <Genre
              key={i}
              genre={g.genre}
              emoji={g.emoji}
              onGenreChange={setGenre}
              id={i}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Genres;
