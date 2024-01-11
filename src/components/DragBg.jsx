import "./styless/styles.drag.css";
import { motion, spring, useMotionValue } from "framer-motion";

const DragBg = ({ x, y }) => {

  
  return (
    <motion.section className="dragCont" layout>
      <motion.div
        className="drag"
        drag
        style={{ x, y }}
        transition={{ delay: 1, type: "tween" }}
      >
        <div className="drag2"></div>
      </motion.div>
    </motion.section>
  );
};

export default DragBg;
