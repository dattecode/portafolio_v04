import React, { useState } from "react";
import "./styless/styles.styles.css";
import { AnimatePresence, motion } from "framer-motion";

const allStyles = ["lato", "Inconsolata", "barlow", "darkMode"];

const Styless = ({ handleChangeStyles }) => {
  const [styleOn, setstyleOn] = useState(false);

  const stylesAnimated = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="stylessMain">
      <button className="fontStyleIcon" onClick={() => setstyleOn(!styleOn)}>
        Estilos
      </button>
      <AnimatePresence>
        {styleOn === true ? (
          <motion.div
            className="stylesCont"
            variants={stylesAnimated}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {allStyles.map((style) => (
              <p
                key={style}
                className={`${style} styleItem`}
                onClick={() => handleChangeStyles(style)}
              >
                {style}
              </p>
            ))}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </section>
  );
};

export default Styless;
