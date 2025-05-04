"use client";

// import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Genres from "./components/Genres";
import Moods from "./components/Moods";

export default function Home() {
  return (
    <div className="flex flex-col">
      <svg
        className="absolute -z-50 h-72 w-72 opacity-50
        top-[1200px] left-[200px]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M46.2,-18.2C52.1,3.2,43.8,26.1,25.6,40.6C7.3,55.1,-20.9,61.3,-42.4,48.1C-63.9,34.9,-78.8,2.2,-70.6,-22.3C-62.4,-46.9,-31.2,-63.3,-5.5,-61.5C20.1,-59.7,40.3,-39.6,46.2,-18.2Z"
          transform="translate(100 100)"
        />
      </svg>

      <Hero />

      <Genres />

      <Moods />
    </div>
  );
}
