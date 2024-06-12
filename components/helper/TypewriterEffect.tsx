import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypewriterEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "We build React Projects",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "We build Backends",
        1000,
        "We Integrate Mpesa-payments",
        1000,
        "We do Web hosting",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
      repeat={Infinity}
    />
  );
};

export default TypewriterEffect;
