import React from "react";

const Color = ({ name, hex }: { name: string; hex: string }) => {
  return (
    <div>
      <p>{name}</p>

      <p>{hex}</p>
    </div>
  );
};

const colors = [{ name: "green", hex: "#76b594" }];

const Colors = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className="text-4xl font-semibold text-neutral-300 mt-6 mb-16">
        What color are we feeling today?
      </p>

      <div className="flex flex-wrap items-start justify-center gap-12">
        {colors.map((c, i) => (
          <Color key={i} name={c.name} hex={c.hex} />
        ))}
      </div>
    </div>
  );
};

export default Colors;
