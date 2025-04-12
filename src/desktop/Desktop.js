import React, { useRef, useState } from "react";
import "./Desktop.css";
import Taskbar from "./Taskbar";
import Icon from "./Icon";
import Program from "../program/Program";
import { icons } from "../constants";

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
    const existingItem = openedItems.find((item) => item.name === icon.name);

    existingItem
      ? existingItem.minimized && handleRestoreItem(icon.name)
      : setOpenedItems([...openedItems, { ...icon, minimized: false }]);
  };

  const handleDesktopClick = (event) => {
    if (!event.target.closest(".icon")) {
      setSelectedIcon(null);
    }
  };

  const handleCloseItem = (index) => {
    setOpenedItems(openedItems.filter((_, i) => i !== index));
  };

  const handleMinimizeItem = (name) => {
    setOpenedItems(
      openedItems.map((item) =>
        item.name === name ? { ...item, minimized: true } : item
      )
    );
  };

  const handleRestoreItem = (name) => {
    setOpenedItems(
      openedItems.map((item) =>
        item.name === name ? { ...item, minimized: false } : item
      )
    );
    setFocusedProgram(name);
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

      {openedItems.map(
        (item, index) =>
          !item.minimized && (
            <Program
              key={index}
              name={item.name}
              icon={item.icon}
              contents={item.contents}
              onClose={() => handleCloseItem(index)}
              onMinimize={() => handleMinimizeItem(item.name)}
              setFocusedProgram={(name) => setFocusedProgram(name)}
              focusedProgram={focusedProgram}
              style={{ zIndex: focusedProgram === item.name ? 1000 : index }}
              address={item.address}
              completeHeader={item.completeHeader}
            />
          )
      )}

      <Taskbar
        programs={openedItems}
        focusedProgram={focusedProgram}
        setFocusedProgram={(name) => setFocusedProgram(name)}
        onRestore={handleRestoreItem}
      />
    </div>
  );
};

export default Desktop;
