import React, { ReactNode } from "react";
import { MotionStyle, motion } from "framer-motion";

type FlowUpAnimationPropsType = React.PropsWithChildren<{
  children: ReactNode;
  style?: MotionStyle;
}>;

function FlowUpAnimation({ children, style }: FlowUpAnimationPropsType) {
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
