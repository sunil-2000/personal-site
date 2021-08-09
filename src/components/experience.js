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
            description="During the internship I worked closely with the
            Karbon product, Nutanix's kubernetes container management product, team.
            I developed code that is integrated with the automation framework to
            track the resouce usage of kubernetes resources (pods, nodes & containers) during
            test runs. The project will be used to monitor the resource usage of k8s clusters
            under different circumstances, and is helpful when scaling clusters and
            workloads. I also participated in the company-wide intern hackathon (U-Hack),
            where I was teamed with other interns to develop an esxi hypervisor license manager
            tool from scrach. The tool is expected to save the company $250,000."
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
