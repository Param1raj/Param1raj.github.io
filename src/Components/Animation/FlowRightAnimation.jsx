import React from "react";
import { motion } from "framer-motion";
function FlowRightAnimation({ children, style }) {
  return (
    <motion.div
      style={{ ...style }}
      initial={{ opacity: 0, x: -80 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 1,
          duration: 0.7,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default FlowRightAnimation;
