import { Component } from "react";
import classes from "../styles/projects.module.css";
import ProjectRow from "./projectRow";
import boolPlnImage from "../boolpln.png";
// police data vis proj imports
import policeImage from "../police_data_vis.png";

class Projects extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.title}>Projects</div>
        <div className={classes.cardContainer}>
          <ProjectRow
            image={boolPlnImage}
            link='https://boolpln.io'
            title='boolpln.io'
            description='With two friends, we developed a full stack app from scratch to make casual planning
            easier and fun with friends. Especially among college students, planning can sometimes feel like
            a complicated and dreaded task. boolpln.io is directly aimed at solving this problem; users can create
            groups and simply click on timeslots that are available, and view the timeslots that other group
            members have selected.'
            iconList={[
              { code: "cib:react", name: "react" },
              { code: "cib:redux", name: "redux" },
              { code: "cib:bootstrap", name: "bootstrap" },
              { code: "cib:javascript", name: "Javascript" },
              { code: "cib:html5", name: "HTML5" },
              { code: "cib:css3", name: "CSS3" },
              { code: "cib:django", name: "django" },
              { code: "cib:python", name: "python" },
              { code: "cib:postgresql", name: "postgres" },
            ]}
          ></ProjectRow>
          <ProjectRow
            image={policeImage}
            link='https://sunil-2000.github.io/PoliceKillingDataVis/'
            title='Police Visualization'
            description='The past year has been a major wake up call for America in terms of
            police brutality. With this project the goal was to create a
            powerful visualization to further expose this crisis and educate
            others on police violence.'
            iconList={[
              { code: "cib:d3-js", name: "d3.js" },
              { code: "cib:javascript", name: "Javascript" },
              { code: "cib:html5", name: "HTML5" },
              { code: "cib:css3", name: "CSS3" },
            ]}
          ></ProjectRow>
        </div>
      </div>
    );
  }
}
export default Projects;
