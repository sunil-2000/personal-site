import { Component } from "react";
import { Card } from "react-bootstrap";
import classes from "../styles/projectRow.module.css";
import IconContainer from "./iconContainer";

class ProjectRow extends Component {
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
      <Card className={classes.card}>
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
          <Card.Text className={classes.iconRow}>
            {this.renderIcons(this.props.iconList)}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default ProjectRow;
