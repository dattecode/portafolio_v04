import React, { useState } from "react";
import "./styless/styles.navquery.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconMail,
  IconMenu2,
} from "@tabler/icons-react";

const NavQuery = () => {
  const [navIsOn, setNavIsOn] = useState(false);

  const stylesAnimated = {
    closed: {
      opacity: 0,
      x: -20,
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
    <article className="navQueryMain">
      <button className="btnQueryNav" onClick={() => setNavIsOn(!navIsOn)}>
        <IconMenu2 />
      </button>
      <AnimatePresence>
        {navIsOn === true ? (
          <div>
            <motion.div
              variants={stylesAnimated}
              initial="closed"
              animate="open"
              exit="closed"
              className="queryNavSelect"
            >
              <Link
                className="navLinkQuery"
                to="home"
                smooth={true}
                duration={500}
              >
                -Inicio
              </Link>
              <Link
                className="navLinkQuery"
                to="proyect"
                smooth={true}
                duration={500}
              >
                -Proyectos
              </Link>
              <Link
                className="navLinkQuery"
                to="skills"
                smooth={true}
                duration={500}
              >
                -Habilidades
              </Link>
            </motion.div>
            <motion.div
              variants={stylesAnimated}
              initial="closed"
              animate="open"
              exit="closed"
              className="queryContact"
            >
              <a href="https://github.com/dattecode" target="_blank">
                <IconBrandGithubFilled className="iconContactGit" />
              </a>
              <a
                href="https://www.linkedin.com/in/leonardo-v-496594274"
                target="_blank"
              >
                <IconBrandLinkedin className="iconContactLink" />
              </a>
              <a href="mailto:dattecode@gmail.com" target="_blank">
                <IconMail className="iconContact" />
              </a>
            </motion.div>
          </div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </article>
  );
};

export default NavQuery;
