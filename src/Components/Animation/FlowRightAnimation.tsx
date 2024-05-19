import React, { ReactNode } from "react";
import { MotionStyle, motion } from "framer-motion";

type FlowLeftAnimationPropsType = React.PropsWithChildren<{
  children: ReactNode;
  style?: MotionStyle;
}>;

function FlowRightAnimation({ children, style }: FlowLeftAnimationPropsType) {
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
