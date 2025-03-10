import React from "react";
import Draggable from "react-draggable";
import "./Icon.css";

const Icon = ({ name, icon, ref }) => {
  return (
    <Draggable key={icon.name} nodeRef={ref} grid={[8, 20]}>
      <div
        ref={ref}
        className="icon"
        style={{ textAlign: "center", margin: "10px" }}
      >
        <img className="icon-img" src={icon} />
        <div className="icon-label">{name}</div>
      </div>
    </Draggable>
  );
};

export default Icon;
