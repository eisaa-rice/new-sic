"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full max-x-screen-xl">
      <div className="flex flex-col items-center min-h-screen w-full max-w-screen-xl">
        <div className="flex w-full p-12 items-center justify-between">
          <p>New-sic</p>

          <div className="flex">
            <p>Share</p>
          </div>
        </div>

        <p className="text-7xl font-bold mt-24">New music, just for you.</p>

        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl text-neutral-400 font-semibold mt-24">
            Try for free now and discover what you&apos;ll be jamming out to
            next.
          </p>

          <p className="text-xl mt-96 text-neutral-600">
            Scroll down to continue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
