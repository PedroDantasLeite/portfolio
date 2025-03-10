import React, { useRef } from "react";
import Draggable from "react-draggable"; // Both at the same time
import Taskbar from "./Taskbar";

const icons = [
  { id: 1, name: "My Projects", icon: "📂" },
  { id: 2, name: "About Me", icon: "📝" },
  { id: 3, name: "Contact", icon: "📧" },
];

const Desktop = () => {
  const iconRefs = useRef(icons.map(() => React.createRef()));

  return (
    <div
      className="desktop"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: "url('/background1080.jpg')",
        backgroundSize: "cover",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "start",
        padding: "20px",
        position: "relative",
      }}
    >
      {icons.map((icon, index) => (
        <Draggable
          key={icon.id}
          nodeRef={iconRefs.current[index]}
          grid={[25, 25]}
        >
          <div
            ref={iconRefs.current[index]}
            className="icon"
            style={{ textAlign: "center", margin: "10px" }}
          >
            <div className="icon-img" style={{ fontSize: "40px" }}>
              {icon.icon}
            </div>
            <p
              className="icon-label"
              style={{ color: "white", marginTop: "5px" }}
            >
              {icon.name}
            </p>
          </div>
        </Draggable>
      ))}
      <Taskbar />
    </div>
  );
};

export default Desktop;
