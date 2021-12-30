import React, { FunctionComponent, ReactNode } from "react";
import { motion } from "framer-motion";

const Paragraph: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.3 }} className="text-white text-lg">
      {children}
    </motion.p>
  );
};

export default Paragraph;
