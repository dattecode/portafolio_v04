import { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";
import Styless from "./components/Styless";
import { motion, useMotionValue } from "framer-motion";
import Loading from "./components/Loading";
import DragBg from "./components/DragBg";

function App() {
  //state
  const [actionUseRef, setActionUseRef] = useState("");
  const [setstyleOn, setSetstyleOn] = useState("darkMode");
  const [loading, setLoading] = useState(false);
  //reff
  const homeRef = useRef(null);
  const proyectRef = useRef(null);
  const skillRef = useRef(null);

  //animated
  const articleAnimated = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  //motionValue
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const updatePosition = (event) => {
    x.set(event.clientX - 150 / 2);
    y.set(event.clientY - 150 / 2);
  };

  //effect
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const timerChange = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearInterval(timerChange);
    };
  }, [setstyleOn]);

  return (
    <motion.main className={`${setstyleOn}`} onMouseMove={updatePosition}>
      <DragBg x={x} y={y} />
      <Styless setSetstyleOn={setSetstyleOn} />
      {loading === true ? <Loading /> : ""}
      <nav className="navMain">
        <Navbar />
      </nav>
      <article className="contentMain">
        <Home articleAnimated={articleAnimated} />
        <Proyects articleAnimated={articleAnimated} />
        <Skills articleAnimated={articleAnimated} />
      </article>
    </motion.main>
  );
}

export default App;
