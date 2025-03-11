import React from "react";
import "./Icon.css";

const Icon = ({ name, icon, ref, selected, onClick, onDoubleClick }) => {
  return (
    <div key={icon.name} grid={[0.01, 20]}>
      <div
        ref={ref}
        className={`icon ${selected ? "selected" : ""}`}
        style={{ textAlign: "center", margin: "10px" }}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
      >
        <img
          className={`icon-img ${selected ? "dim" : ""}`}
          src={icon}
          alt="icon"
          style={{ userSelect: "none" }}
        />
        <div className="icon-label" style={{ userSelect: "none" }}>
          {name}
        </div>
      </div>
    </div>
  );
};

export default Icon;
