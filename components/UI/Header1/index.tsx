import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

const Header1: FunctionComponent = () => {
  return (
    <>
      <h1 className="text-white text-3xl lg:text-10xl">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8, delay: 1.5 }}>
          T
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.9, delay: 1.5 }}>
          G
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1.7 }}>
          M
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.1, delay: 1.8 }}>
          u
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.2, delay: 1.9 }}>
          s
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.3, delay: 2 }}>
          i
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.4, delay: 2.1 }}>
          c
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5, delay: 2.2 }}>
          f
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.6, delay: 2.3 }}>
          y
        </motion.span>
      </h1>
    </>
  );
};

export default Header1;
