import React from "react";
import { motion } from "framer-motion";
function FlowUpAnimation({ children, style }) {
  return (
    <motion.div
      style={{ ...style }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default FlowUpAnimation;
