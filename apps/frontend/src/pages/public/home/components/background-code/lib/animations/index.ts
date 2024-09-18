export const textAnimations = {
  codeHovered: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      delay: i * 0.01,
      duration: 0.2,
      ease: "easeInOut",
    },
  }),
  codeNoHovered: {
    y: 0,
    transition: { duration: 0.2 },
  },
};
