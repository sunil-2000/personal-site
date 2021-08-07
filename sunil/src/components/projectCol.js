import { Component } from "react";
import { Card } from "react-bootstrap";
import classes from "../styles/projectCol.module.css";
import IconContainer from "./iconContainer";

class ProjectCol extends Component {
  renderIcons(icons) {
    let result = [];
    for (let i = 0; i < icons.length; i++) {
      const iconName = icons[i].name;
      const iconCode = icons[i].code;
      result.push(
        <IconContainer key={i} name={iconName} code={iconCode}></IconContainer>
      );
    }
    return result;
  }
  render() {
    return (
      <Card className={classes.colCard}>
        <Card.Header>
          <Card.Img variant='top' src={this.props.image} />
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <a href={this.props.link}>{this.props.title}</a>
          </Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Title as='p'>
            <strong>Technologies used:</strong>
          </Card.Title>
          <Card.Text>{this.renderIcons(this.props.iconList)}</Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default ProjectCol;
