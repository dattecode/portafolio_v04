import React from "react";
import "./styless/styles.home.css";
import { motion } from "framer-motion";

const Home = ({ articleAnimated }) => {
  return (
    <article className="homeMain" id="home">
      <div className="navPresentQuery">
        <h2 className="navDesTit">Leonardo Valenzuela</h2>
        <h3 className="navDesSubTit">Desarrollador Full-Stack</h3>
        <p>
          Mi objetivo principal es fusionar diseño y funcionalidad para crear
          experiencias efectivas para los usuarios.
        </p>
      </div>
      <motion.p
        className="homeDes"
        variants={articleAnimated}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Soy un con un enfoque claro en la expansión constante de mis
        habilidades. Mi experiencia se centra en el desarrollo en el entorno de
        JavaScript, especialmente en React, donde utilizo librerías como Axios,
        Framer Motion, y hago uso de frameworks como Tailwind y Bootstrap para
        crear interfaces atractivas y funcionales. En el backend, mi expertise
        se extiende a Node.js y Express.js, y en bases de datos, trabajo con
        Sequelize y PostgreSQL. Mi metodología de aprendizaje se basa en la
        auto-crítica y la dedicación al estudio constante de nuevas tecnologías.
      </motion.p>
      <motion.section
        className="homeSubDes"
        variants={articleAnimated}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="hoursHome">
          <p>+ 200</p>
          <p>Horas De Practica</p>
        </div>
        <div className="homeCertificates">
          <h3 className="titleCertificate">Certificados</h3>
          <div className="certificates">
            <a
              href="https://certificates.academlo.com/es/verify/65094729902283"
              target="_blank"
              className="aCertificate"
            >
              Fundamentos Del Dearrolo Web
            </a>
            <a
              href="https://certificates.academlo.com/en/verify/24511135529961"
              target="_blank"
              className="aCertificate"
            >
              Desarrollo de Aplicaciones Web con React
            </a>
          </div>
        </div>
      </motion.section>
    </article>
  );
};

export default Home;
