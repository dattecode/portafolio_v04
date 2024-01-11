import React from "react";
import "./styless/styles.proyects.css";
import pokeImg from "./imgs/pokeImg.png";
import rymImg from "./imgs/rymImg.png";
import upImg from "./imgs/upImg.png";
import { IconBrandGithubFilled, IconMessage2Code } from "@tabler/icons-react";
import { motion } from "framer-motion";

const proyects = [
  {
    name: "Pokedex",
    image: pokeImg,
    descripcion:
      "Pagina para ver tus Pokémon favoritos, implementa una descripción de los Pokémon y sistema de búsqueda",
    git: "https://github.com/dattecode/pokedex_v02",
    url: "https://rad-cucurucho-74df0c.netlify.app",
  },
  {
    name: "Rick Y Morty",
    image: rymImg,
    descripcion:
      "Ve tus personajes favoritos segun su locacion y revisa si estan vivos o muertos",
    git: "https://github.com/dattecode/RYM_V02",
    url: "https://glistening-figolla-8faff5.netlify.app",
  },
  {
    name: "Panel de usuarios",
    image: upImg,
    descripcion:
      "genera edita tus usuarios la pagina esta conectada a una api usando las propiedades de https",
    git: "https://github.com/dattecode/userPanelV02",
    url: "https://lucky-maamoul-58474b.netlify.app",
  },
];

const Proyects = ({ articleAnimated }) => {
  return (
    <article className="proyectsMain" id="proyect">
      <h2 className="proyectsMT">Proyectos</h2>
      <section className="proyectContainer">
        {proyects.map((proyect) => (
          <motion.div
            key={proyect.name}
            className="desProyectCont"
            variants={articleAnimated}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <img src={proyect.image} className="proyectImg" />
            <tr className="proyectInfo">
              <h3 className="proyectTit">{proyect.name}</h3>
              <p>{proyect.descripcion}</p>
              <div className="proyectIconCont">
                <a href={proyect.git} target="_blank">
                  <IconBrandGithubFilled className="proyectIcon" />
                </a>
                <a href={proyect.url} target="_blank">
                  <IconMessage2Code className="proyectIcon" />
                </a>
              </div>
            </tr>
          </motion.div>
        ))}
      </section>
    </article>
  );
};

export default Proyects;
