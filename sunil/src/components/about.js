import { Component } from "react";
import ReactRotatingText from "react-rotating-text";
import classes from "../styles/about.module.css";
import { Row, Card, Col, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import selfImage from "../intro.jpg";
import Projects from "./projects";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [
        "Student",
        "Builder",
        "Problem Solver",
        "Software Engineer Intern",
      ],
    };
  }
  render() {
    return (
      <section className={classes.container}>
        {/* <Icon
          className={classes.icon}
          icon='pixelarticons:mood-happy'
          width={500}
          height={500}
        /> */}
        <div className={classes.intro}>Sunil Sabnis</div>
        <ReactRotatingText
          className={classes.rotateText}
          items={this.state.titles}
        />
        <Container className={classes.cardContainer} fluid>
          <Row>
            <Col md={7}>
              <Projects></Projects>
            </Col>
            <Col md={5}>
              <Card className={classes.card}>
                <Card.Header>
                  <Card.Img variant='top' src={selfImage} />
                </Card.Header>
                <Card.Body>
                  <Card.Title>Hello!</Card.Title>
                  <Card.Text>
                    👋 I'm Sunil. I am a senior at Cornell University with
                    interests in web & app development, data science, and
                    software engineering.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default About;
