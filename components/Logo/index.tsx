import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

const Logo: FunctionComponent = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }}>
        <h1 className="text-11xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">@</h1>
      </motion.div>
    </>
  );
};

export default Logo;
