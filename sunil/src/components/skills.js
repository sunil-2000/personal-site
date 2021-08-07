import { Component } from "react";
import classes from "../styles/skills.module.css";
import IconContainer from "./iconContainer";

class Skills extends Component {
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
      <section className={classes.container}>
        <h3 className={classes.header}>Skills</h3>
        <div>
          {this.renderIcons([
            { code: "cib:javascript", name: "Javascript" },
            { code: "cib:java", name: "Java" },
            { code: "cib:python", name: "python" },
            { code: "cib:ocaml", name: "Ocaml" },
            { code: "cib:r", name: "R" },
            { code: "simple-icons:pandas", name: "Pandas" },
            { code: "simple-icons:jupyter", name: "Jupyter Notebooks" },
            { code: "cib:kubernetes", name: "kubernetes" },
            { code: "cib:react", name: "react" },
            { code: "cib:redux", name: "redux" },
            { code: "cib:postgresql", name: "Postgresql" },
          ])}
        </div>
      </section>
    );
  }
}
export default Skills;
