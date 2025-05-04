"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const Moods = () => {
  const [mood, setMood] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <p className="text-4xl">What kind of mood are you in?</p>

      <div className="flex flex-wrap justify-center gap-52 px-16 mt-52">
        <motion.button
          className="h-52 w-52 rounded-full text-3xl
          border border-neutral-50/25"
          initial={{ color: "#fef9c2" }}
          whileHover={{
            cursor: "pointer",
            // background: "black",
            scale: 1.05,
            color: "#fff085",
          }}
          onClick={() => {}}
        >
          happy
        </motion.button>

        <motion.button
          className="h-52 w-52 rounded-full text-3xl
          border border-neutral-50/25"
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
          border border-neutral-50/25"
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
