import { Component } from "react";
import { Image } from "react-bootstrap";
import IconContainer from "./iconContainer";
import classes from "../styles/internship.module.css";
class Internship extends Component {
  renderIcons(icons) {
    let result = [];
    for (let i = 0; i < icons.length; i++) {
      const iconName = icons[i].name;
      const iconCode = icons[i].code;
      result.push(
        <IconContainer
          large={true}
          key={i}
          name={iconName}
          code={iconCode}
        ></IconContainer>
      );
    }
    return result;
  }
  render() {
    return (
      <>
        <section className={classes.container}>
          <h2 className={classes.title}>
            <strong>{this.props.title}</strong>
          </h2>
          <div>
            {this.renderIcons([
              { code: "simple-icons:nutanix", name: "Nutanix" },
            ])}
          </div>
          <div>{this.props.description}</div>
          <h5>
            <strong>Technologies Used:</strong>
          </h5>
          <div className={classes.iconContainer}>
            {this.renderIcons(this.props.iconList)}
          </div>
        </section>
      </>
    );
  }
}
export default Internship;
