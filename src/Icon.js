import React from "react";
import Draggable from "react-draggable";
import "./Icon.css";

const Icon = ({ name, icon, ref, selected, onClick }) => {
  return (
    <Draggable key={icon.name} nodeRef={ref} grid={[8, 20]}>
      <div
        ref={ref}
        className={`icon ${selected ? "selected" : ""}`}
        style={{ textAlign: "center", margin: "10px" }}
        onClick={onClick}
      >
        <img className={`icon-img ${selected ? "dim" : ""}`} src={icon} />
        <div className="icon-label">{name}</div>
      </div>
    </Draggable>
  );
};

export default Icon;
