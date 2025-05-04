"use client";

import React from "react";

const Genre = ({
  genre,
  style,
}: {
  genre: string;
  style?: React.CSSProperties;
}) => {
  return (
    <button
      style={style}
      className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-lg"
    >
      {genre}
    </button>
  );
};

const genres = [
  { genre: "bebop", style: {} },
  { genre: "techno", style: {} },
  { genre: "pop rock", style: {} },
  { genre: "classical", style: {} },
  { genre: "grunge", style: {} },
  { genre: "romantic", style: {} },
  { genre: "country", style: {} },
  { genre: "opera", style: {} },
  { genre: "vaporwave", style: {} },
  { genre: "rock", style: {} },
  { genre: "reggaeton", style: {} },
  { genre: "metal", style: {} },
  { genre: "bachata", style: {} },
  { genre: "baroque", style: {} },
  { genre: "dubstep", style: {} },
  { genre: "j-pop", style: {} },
  { genre: "lofi", style: {} },
  { genre: "banda", style: {} },
  { genre: "punk", style: {} },
  { genre: "edm", style: {} },
  { genre: "latino pop", style: {} },
  { genre: "hardcore", style: {} },
  { genre: "electropop", style: {} },
  { genre: "alternative", style: {} },
  { genre: "salsa", style: {} },
  { genre: "rap/hip-hop", style: {} },
  { genre: "k-pop", style: {} },
  { genre: "video game music", style: {} },
  { genre: "emo", style: {} },
  { genre: "acoustic", style: {} },
  { genre: "pop punk", style: {} },
  { genre: "rhythm & blues", style: {} },
  { genre: "phonk", style: {} },
  { genre: "bedroom pop", style: {} },
  { genre: "cumbia", style: {} },
  { genre: "jazz", style: {} },
  { genre: "hyperpop", style: {} },
  { genre: "funk", style: {} },
  { genre: "folk", style: {} },
  { genre: "pop", style: {} },
];

const Genres = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <p className="text-4xl">What genres do you like?</p>

      <div className="flex flex-wrap justify-center gap-12 px-16 mt-24">
        {genres.map((g, i) => (
          <Genre key={i} genre={g.genre} style={g.style} />
        ))}
      </div>
    </div>
  );
};

export default Genres;
