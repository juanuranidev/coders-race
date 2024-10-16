import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ConfettiProps = {
  icon: string;
  trigger: boolean;
};

export default function CustomConfetti({ icon, trigger }: ConfettiProps) {
  const [confetti, setConfetti] = useState<
    { id: number; x: number; y: number; rotate: number; size: number }[]
  >([]);

  useEffect(() => {
    if (trigger) {
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 200 - 100,
        y: Math.random() * -200 - 50,
        rotate: Math.random() * 360,
        size: Math.random() * 10 + 10,
      }));

      setConfetti(newConfetti);

      const timer = setTimeout(() => setConfetti([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {confetti.map(({ id, x, y, rotate, size }) => (
          <motion.img
            key={id}
            src={icon}
            alt="confetti icon"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              x: x,
              y: y,
              rotate: rotate,
              scale: 1,
            }}
            exit={{ opacity: 0, y: y + 200 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="absolute"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
