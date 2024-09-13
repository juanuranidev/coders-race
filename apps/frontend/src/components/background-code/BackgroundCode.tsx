import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundCode({ code }: any) {
  const [hovered, setHovered] = useState(false);

  const textAnimations = {
    codeHovered: { opacity: 1, scale: 1.1 },
    codeNoHovered: { opacity: 0.8, scale: 1 },
  };

  return (
    <motion.div
      key={code?.text}
      variants={textAnimations}
      className="flex overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={hovered ? "codeHovered" : "codeNoHovered"}
      style={{ justifyContent: code?.justify, maxWidth: "100%" }}
    >
      <p
        style={{
          opacity: "0.1",
          transition: "transform 0.2s ease, opacity 0.2s ease",
        }}
        className="text-white-400 font-semibold cursor-default select-none whitespace-nowrap" // Evita el quiebre de línea
      >
        {code?.text}
      </p>
    </motion.div>
  );
}
