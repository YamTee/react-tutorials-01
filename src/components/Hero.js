import React from "react";

const Hero = ({ heroName }) => {
  if (heroName === "Joker") throw new Error("Joker is not a hero!");

  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  );
};

export default Hero;
