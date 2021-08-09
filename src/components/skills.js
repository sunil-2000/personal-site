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
            { code: "cib:javascript", name: "javascript" },
            { code: "cib:java", name: "java" },
            { code: "cib:python", name: "python" },
            { code: "cib:ocaml", name: "ocaml" },
            { code: "cib:r", name: "r" },
            { code: "simple-icons:pandas", name: "pandas" },
            { code: "simple-icons:jupyter", name: "jupyter notebooks" },
            { code: "cib:react", name: "react" },
            { code: "cib:redux", name: "redux" },
            { code: "cib:postgresql", name: "postgres" },
          ])}
        </div>
      </section>
    );
  }
}
export default Skills;
