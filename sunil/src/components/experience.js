import { Component } from "react";
import classes from "../styles/experience.module.css";
import Internship from "./internship";
import Background from "./art/background";
class Experience extends Component {
  render() {
    return (
      <>
        <section className={classes.container}>
          <Background></Background>
          <h1 className={classes.header}>Experience</h1>
          <Internship
            title='Software Engineer Intern @ Nutanix'
            description='text will go here'
            iconList={[
              { code: "logos:kubernetes", name: "kubernetes" },
              { code: "logos:prometheus", name: "prometheus (promQL)" },
              { code: "logos:python", name: "python" },
              // add react, flask, postgres for esxi project
            ]}
          ></Internship>
        </section>
      </>
    );
  }
}
export default Experience;
