import { Component } from "react";
import { Card } from "react-bootstrap";
import policeImage from "../police_data_vis.png";
import classes from "../styles/projects.module.css";
class Projects extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.title}>Projects</div>
        <Card className={classes.card}>
          <Card.Header>
            <Card.Img variant='top' src={policeImage} />
          </Card.Header>
        </Card>
      </div>
    );
  }
}
export default Projects;
