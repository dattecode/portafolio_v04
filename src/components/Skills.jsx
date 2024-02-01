import React, { useState } from "react";
import "./styless/styles.skills.css";
import { motion } from "framer-motion";

const skills = [
  {
    type: "Front-End",
    habilities: [
      "Html",
      "Css",
      "React",
      "Frame-motion",
      "tailwind Css",
      "Boostrap",
    ],
    description:
      "Especializado en el desarrollo de interfaces con React, aplicando librerías esenciales como Axios, React-router-dom, Redux Toolkit, y Frame Motion. Proficiente en buenas prácticas de separación de componentes y renderizado eficiente.",
  },
  {
    type: "Backend",
    habilities: [
      "JavaScript",
      "nodeJs",
      "expressJs",
      "sequelize",
      "postgresSQL",
      "jsonWebToken",
      "cors",
    ],
    description:
      "Destrezas en el desarrollo de servidores con Node.js y Express.js. Integración efectiva de bases de datos mediante Sequelize, con énfasis en la seguridad y autenticación usando JSON Web Token (JWT). Gestión hábil de CORS para asegurar la comunicación segura en API RESTfull.",
  },
];

const Skills = ({ articleAnimated }) => {
  const [habilitiOn, setHabilitiOn] = useState(skills[0]);

  // Animates
  const variantsDes = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const variantsDesSkill = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <article className="skillsMain" id="skills">
      <h2 className="skillsMT">Habilidades</h2>
      <section className="skillAllCont">
        <motion.div
          className="skillBtnCont"
          variants={articleAnimated}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {skills.map((skill) => (
            <motion.button
              onClick={() => setHabilitiOn(skill)}
              className={`skillBtn ${skill.type}`}
              key={skill.type}
              layout
            >
              {skill.type}
              {skill.type === habilitiOn.type ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </motion.button>
          ))}
        </motion.div>
        <div className="skillTecno">
          <motion.p
            className="skillDes"
            variants={variantsDes}
            initial="hidden"
            animate="visible"
            key={Math.random()}
          >
            {habilitiOn.description}
          </motion.p>
          <motion.ul
            variants={variantsDesSkill}
            initial="hidden"
            animate="visible"
            key={Math.random()}
          >
            {habilitiOn.habilities.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </motion.ul>
        </div>
      </section>
    </article>
  );
};

export default Skills;
