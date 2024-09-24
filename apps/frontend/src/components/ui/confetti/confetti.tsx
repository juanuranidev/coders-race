import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ConfettiPiece from "./components/confetti-piece";

type Props = {
  icon: string;
  trigger: boolean;
};

export default function Confetti({ icon, trigger }: Props) {
  const [confetti, setConfetti] = useState<{ id: number }[]>([]);

  useEffect(() => {
    if (trigger) {
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: Date.now() + i,
      }));

      setConfetti(newConfetti);

      const timer = setTimeout(() => setConfetti([]), 1000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <AnimatePresence>
        {confetti.map(({ id }) => (
          <ConfettiPiece key={id} icon={icon} />
        ))}
      </AnimatePresence>
    </div>
  );
}
