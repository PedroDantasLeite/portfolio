import React, { useRef } from "react";
import "./Desktop.css";
import Draggable from "react-draggable"; // Both at the same time
import Taskbar from "./Taskbar";
import Icon from "./Icon";
import { icons } from "./files";

const Desktop = () => {
  const iconRefs = useRef(icons.map(() => React.createRef()));

  return (
    <div className="desktop">
      {icons.map((icon, index) => (
        <Icon name={icon.name} icon={icon.icon} ref={iconRefs.current[index]} />
      ))}
      <Taskbar />
    </div>
  );
};

export default Desktop;
