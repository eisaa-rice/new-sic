"use client";

import React from "react";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center
    w-full max-w-screen-xl"
    >
      <p className="text-7xl font-bold mt-48">New music, just for you.</p>

      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl text-neutral-400 font-semibold mt-24">
          Try for free now and discover what you&apos;ll be jamming out to next.
        </p>

        <p className="text-xl text-neutral-600 mt-72">Get started.</p>
      </div>
    </div>
  );
};

export default Hero;
