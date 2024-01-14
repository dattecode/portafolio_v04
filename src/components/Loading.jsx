import React from "react";
import "./styless/styles.loading.css";
import { AnimatePresence, motion } from "framer-motion";

const Loading = () => {
  return (
    <AnimatePresence>
      <motion.article
        className="loadingCont"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
      >
        <h3 className="loadingMess">Cargando.. 😉</h3>
      </motion.article>
    </AnimatePresence>
  );
};

export default Loading;
