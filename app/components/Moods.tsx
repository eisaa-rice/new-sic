"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const Moods = () => {
  const [mood, setMood] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <p className="text-4xl font-semibold text-neutral-200">
        What kind of mood are you in?
      </p>

      <div className="flex flex-wrap justify-center gap-52 px-16 mt-32">
        <motion.button
          className="h-52 w-52 rounded-full text-3xl 
          bg-white/10 backdrop-blur-lg"
          whileHover={{
            cursor: "pointer",
            // background: "black",
            scale: 1.05,
          }}
          onClick={() => {}}
        >
          happy
        </motion.button>

        <motion.button
          className="h-52 w-52 rounded-full text-3xl
          bg-white/10 backdrop-blur-lg"
          initial={{ color: "#dbeafe" }}
          whileHover={{
            cursor: "pointer",
            // background: "black",
            scale: 1.05,
            color: "#bedbff",
          }}
          onClick={() => {}}
        >
          sad
        </motion.button>

        <motion.button
          className="h-52 w-52 rounded-full text-3xl
          bg-white/10 backdrop-blur-lg"
          initial={{ color: "#ffe2e2" }}
          whileHover={{
            cursor: "pointer",
            // background: "black",
            scale: 1.05,
            color: "#ffc9c9",
          }}
          onClick={() => {}}
        >
          mad
        </motion.button>
      </div>
    </div>
  );
};

export default Moods;
