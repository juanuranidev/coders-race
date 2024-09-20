import { motion } from "framer-motion";
import { useState } from "react";
import { textAnimations } from "./lib/animations";

export default function BackgroundCode({ code }: any) {
  const [hovered, setHovered] = useState(false);
  const letters = code?.text?.split("") || [];

  return (
    <motion.div
      className="flex overflow-hidden"
      style={{ justifyContent: code?.justify, maxWidth: "100%" }}
    >
      {letters.map((letter: string, i: number) => (
        <motion.span
          key={i}
          custom={i}
          variants={textAnimations}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          animate={hovered ? "codeHovered" : "codeNoHovered"}
          className="text-white-400 font-semibold select-none whitespace-nowrap opacity-10"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
