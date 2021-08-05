import { Component } from "react";
import Star from "./star";
import classes from "../../styles/starContainer.module.css";
import { motion } from "framer-motion";

class StarContainer extends Component {
  generateStars() {
    let result = [];
    for (let i = 0; i < 100; i++) {
      result.push(
        <Star width={this.state.width} height={this.state.height}></Star>
      );
    }
    return result;
  }

  render() {
    return (
      <motion.svg width='100px' height='100px'>
        {this.generateStars}
      </motion.svg>
    );
  }
}
export default StarContainer;
