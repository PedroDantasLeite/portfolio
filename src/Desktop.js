import React, { useRef, useState } from "react";
import "./Desktop.css";
import Taskbar from "./Taskbar";
import Icon from "./Icon";
import { icons } from "./files";

const Desktop = () => {
  const iconRefs = useRef(icons.map(() => React.createRef()));
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (index) => {
    setSelectedIcon(index);
  };

  const handleDesktopClick = (event) => {
    if (!event.target.closest(".icon")) {
      setSelectedIcon(null);
    }
  };

  return (
    <div className="desktop" onClick={handleDesktopClick}>
      {icons.map((icon, index) => (
        <Icon
          key={index}
          name={icon.name}
          icon={icon.icon}
          ref={iconRefs.current[index]}
          selected={selectedIcon === index}
          onClick={() => handleIconClick(index)}
        />
      ))}
      <Taskbar />
    </div>
  );
};

export default Desktop;
