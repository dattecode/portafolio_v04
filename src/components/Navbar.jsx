import React from "react";
import "./styless/styles.navbar.css";
import { Link } from "react-scroll";
import {
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <article className="navMain">
      <motion.section
        className="navDes"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="navDesTit">Leonardo Valenzuela</h2>
        <h3 className="navDesSubTit">Desarrollador Full-Stack</h3>
        <p>
          Mi objetivo principal es fusionar diseño y funcionalidad para crear
          experiencias efectivas para los usuarios.
        </p>
      </motion.section>
      <motion.section
        className="navSelector"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <tr className="navContSelect">
          <Link to="home" smooth={true} duration={500} className="navSelect">
            - Inicio
          </Link>
        </tr>
        <tr className="navContSelect">
          <Link to="proyect" smooth={true} duration={500} className="navSelect">
            - Proyectos
          </Link>
        </tr>
        <tr className="navContSelect">
          <Link to="skills" smooth={true} duration={500} className="navSelect">
            - Habilidades
          </Link>
        </tr>
      </motion.section>
      <motion.section className="navContact" initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{duration:0.9}}>
        <a href="https://github.com/dattecode" target="_blank">
          <IconBrandGithubFilled className="iconContact" />
        </a>
        <h3 className="contactTit">Contactame :</h3>
        <a
          href="https://www.linkedin.com/in/leonardo-valenzuela-ortiz-496594274/"
          target="_blank"
        >
          <IconBrandLinkedin className="iconContact" />
        </a>
        <a href="mailto:dattecode@gmail.com" target="_blank">
          <IconMail className="iconContact" />
        </a>
      </motion.section>
    </article>
  );
};

export default Navbar;
