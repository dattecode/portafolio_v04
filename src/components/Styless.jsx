import React, { useState } from "react";
import "./styless/styles.styles.css";
import { AnimatePresence, motion } from "framer-motion";

const allStyles = ["lato", "Inconsolata", "barlow", "darkMode"];

const Styless = ({ setSetstyleOn }) => {
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
          <motion.tr
            className="stylesCont"
            variants={stylesAnimated}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {allStyles.map((style) => (
              <p key={style} className={`${style} styleItem`} onClick={() => setSetstyleOn(style)}>
                {style}
              </p>
            ))}
          </motion.tr>
        ) : (
          ""
        )}
      </AnimatePresence>
    </section>
  );
};

export default Styless;
