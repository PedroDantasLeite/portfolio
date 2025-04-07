import React, { useRef, useState } from "react";
import "./Desktop.css";
import Taskbar from "./Taskbar";
import Icon from "./Icon";
import Program from "./Program";
import { icons } from "./files";

const Desktop = () => {
  const iconRefs = useRef(icons.map(() => React.createRef()));
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [openedItems, setOpenedItems] = useState([]);
  const [focusedProgram, setFocusedProgram] = useState(null);

  const handleIconClick = (index) => {
    setSelectedIcon(index);
  };

  const handleIconDoubleClick = (index, name) => {
    setFocusedProgram(name);
    const icon = icons[index];
    if (!openedItems.some((item) => item.name === icon.name)) {
      setOpenedItems([...openedItems, icon]);
    }
  };

  const handleDesktopClick = (event) => {
    if (!event.target.closest(".icon")) {
      setSelectedIcon(null);
    }
  };

  const handleCloseItem = (index) => {
    setOpenedItems(openedItems.filter((_, i) => i !== index));
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
          onDoubleClick={() => handleIconDoubleClick(index, icon.name)}
        />
      ))}

      {openedItems.map((item, index) => (
        <Program
          key={index}
          name={item.name}
          icon={item.icon}
          contents={item.contents}
          onClose={() => handleCloseItem(index)}
          setFocusedProgram={(name) => setFocusedProgram(name)}
          focusedProgram={focusedProgram}
          style={{ zIndex: focusedProgram === item.name ? 1000 : index }}
        />
      ))}

      <Taskbar
        programs={openedItems}
        focusedProgram={focusedProgram}
        setFocusedProgram={(name) => setFocusedProgram(name)}
      />
    </div>
  );
};

export default Desktop;
