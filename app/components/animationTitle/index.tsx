"use client";

import { TypeAnimation } from "react-type-animation";

export function TitleAnimated() {
  return (
    <TypeAnimation
      sequence={[
        "Desenvolvedor Front-end",
        1200,
        "",
        600,
        "React & Next",
        1200,
        "",
        600,
      ]}
      wrapper="span"
      speed={40}
      className="text-5xl font-bold text-[#6366F1]"
      repeat={Infinity}
    />
  );
}
