import { Component } from "react";
import classes from "../../styles/star.module.css";
import { motion } from "framer-motion";
class Star extends Component {
  generateRange() {
    // const width = document.getElementById("starContainer").offsetWidth;
    // const height = document.getElementById("starContainer").offsetHeight;
    const width = this.props.width;
    const height = this.props.height;
    const x0 = Math.random() * width;
    const y0 = Math.random() * height;
    const x1 = Math.random() * width;
    const y1 = Math.random() * height;
    return [
      [x0, y0],
      [x1, y1],
    ];
  }

  render() {
    let range = this.generateRange();
    let start = range[0];
    let end = range[1];
    return (
      <motion.div
        className={classes.square}
        initial={{
          x: start[0],
          y: start[1],
        }}
        animate={{
          x: end[0],
          y: end[1],
        }}
        transition={{
          type: "linear",
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          duration: 5,
        }}
      />
    );
  }
}
export default Star;
