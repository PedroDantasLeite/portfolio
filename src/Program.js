import React, { useState } from "react";
import "./Program.css";

const Program = ({ name, contents, onClose }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="window"
      style={{
        width: "300px",
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: "absolute",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="title-bar" onMouseDown={handleMouseDown}>
        <div className="title-bar-text" style={{ userSelect: "none" }}>
          {name}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
      <div className="window-body">
        {contents ? (
          <div className="folder-contents">
            {contents.map((item, index) => (
              <div key={index} className="folder-item">
                {item}
              </div>
            ))}
          </div>
        ) : (
          <p>There's so much room for activities!</p>
        )}
      </div>
    </div>
  );
};

export default Program;
