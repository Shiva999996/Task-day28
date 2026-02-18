export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

export const paperAnimation = {
  initial: { scale: 0.9, opacity: 0, y: 40 },
  animate: { scale: 1, opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 120 },
};
