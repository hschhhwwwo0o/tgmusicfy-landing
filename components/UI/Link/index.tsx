import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

const Link: FunctionComponent = () => {
  return (
    <>
      <motion.a
        href="https://t.me/tmusicfy_test_bot"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-pink-500 text-base lg:text-lg underline group pointer-events-auto"
      >
        <span className="group-hover:opacity-75 transition-opacity duration-200">G</span>
        <span className="group-hover:opacity-50 transition-opacity duration-500">o</span>
        <span className="group-hover:opacity-75 transition-opacity duration-300"> </span>
        <span className="group-hover:opacity-75 transition-opacity duration-1000">t</span>
        <span className="group-hover:opacity-50 transition-opacity duration-500">o</span>
        <span className="group-hover:opacity-75 transition-opacity duration-300"> </span>
        <span className="group-hover:opacity-75 transition-opacity duration-700">b</span>
        <span className="group-hover:opacity-40 transition-opacity duration-75">o</span>
        <span className="group-hover:opacity-75 transition-opacity duration-300">t</span>
      </motion.a>
    </>
  );
};

export default Link;
