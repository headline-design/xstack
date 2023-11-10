import { motion } from "framer-motion";

const logoVariant = {
  hidden: { x: "0%" }, // Adjust this value to change the starting position
  visible: {
    x: "-100%",
    transition: {
      ease: "linear",
      duration: 50,
      repeat: Infinity,
    },
  },
};

export const Marquee = ({ children }) => (
  <div className="marquee">
    <motion.div
      className="marquee-track"
      variants={logoVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="marquee-content-wrapper">
        {children}
      </div>
    </motion.div>
  </div>
);
