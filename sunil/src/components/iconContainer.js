import { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Icon } from "@iconify/react";
import classes from "../styles/iconContainer.module.css";
class IconContainer extends Component {
  render() {
    const toolTip = <Tooltip id='button-tooltip'>{this.props.name}</Tooltip>;
    return (
      <OverlayTrigger
        placement='bottom'
        delay={{ show: 250, hide: 400 }}
        overlay={toolTip}
      >
        <Icon
          style={{ fontSize: "2em" }}
          className={classes.icon}
          icon={this.props.code}
        />
      </OverlayTrigger>
    );
  }
}
export default IconContainer;
