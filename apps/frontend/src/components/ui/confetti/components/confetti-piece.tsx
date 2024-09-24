import { motion } from "framer-motion";

type Props = {
  icon: string;
};

export default function ConfettiPiece({ icon }: Props) {
  const x = Math.random() * 100 - 50;
  const y = Math.random() * 100 - 50;
  const rotate = Math.random() * 360;

  return (
    <motion.img
      src={icon}
      initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
      animate={{
        opacity: [1, 1, 0],
        scale: [0, 1, 1],
        x: x,
        y: y,
        rotate: rotate,
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute w-5 h-5"
      style={{ pointerEvents: "none" }}
    />
  );
}
