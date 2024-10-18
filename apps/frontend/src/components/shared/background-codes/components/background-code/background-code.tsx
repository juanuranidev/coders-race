import { motion } from "framer-motion";
import { useState } from "react";
import { textAnimations } from "./lib/animations";

interface BackgroundCodeProps {
  code: {
    text: string;
    justify: string;
  };
}

export default function BackgroundCode({ code }: BackgroundCodeProps) {
  const [hovered, setHovered] = useState(false);
  const letters = code.text.split("");

  return (
    <motion.div
      className="flex overflow-hidden"
      style={{ justifyContent: code.justify, maxWidth: "100%" }}
    >
      {letters.map((letter: string, i: number) => (
        <motion.span
          key={i}
          custom={i}
          variants={textAnimations}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          animate={hovered ? "codeHovered" : "codeNoHovered"}
          className="text-white-500 font-semibold select-none whitespace-nowrap opacity-5"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
