import { Component } from "react";
import ReactRotatingText from "react-rotating-text";
import classes from "../styles/about.module.css";
import { Row, Card, Col, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import selfImage from "../intro.jpg";
import Projects from "./projects";
import ProjectCol from "./projectCol";
import flappyImage from "../flappycaml.gif";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: ["Student", "Builder", "Researcher", "Software Engineer"],
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
        <div className={classes.introContainer}>
          <div className={classes.intro}>Sunil Sabnis</div>
          <Icon
            className={classes.linkedin}
            icon='cib:linkedin'
            onClick={() =>
              window
                .open(
                  "https://www.linkedin.com/in/sunil-sabnis-5b5b441aa/",
                  "_blank"
                )
                .focus()
            }
          ></Icon>
          <ReactRotatingText
            className={classes.rotateText}
            items={this.state.titles}
          />
        </div>
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
                    I'm Sunil. I am a senior at Cornell University, pursuing a
                    Bachelor of Science in Information Science with
                    concentrations in data science & interactive technologies. I
                    am currently involved with the{" "}
                    <a href='https://learning.cis.cornell.edu/'>
                      Future of Learning Lab
                    </a>{" "}
                    where I conduct research focused on educational data science
                    & learning analytics. I have interests that span from data
                    science for social good to cloud computing.
                  </Card.Text>
                </Card.Body>
              </Card>
              <ProjectCol
                image={flappyImage}
                link='https://github.com/sunil-2000/FlappyCaml'
                title='Flappy Caml'
                description='A fun spin-off of flappy bird with more game
                features. The game was developed following functional
                programming principals with Ocaml.'
                iconList={[{ code: "cib:ocaml", name: "ocaml" }]}
              ></ProjectCol>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default About;
