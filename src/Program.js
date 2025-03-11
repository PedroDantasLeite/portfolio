import React, { useState, useEffect } from "react";
import "./Program.css";
import Resume from "./Resume";

const Program = ({ name, contents, onClose }) => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 150,
    y: window.innerHeight / 2 - 150,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - lastMousePosition.x;
      const dy = e.clientY - lastMousePosition.y;
      const threshold = 5; // Adjust this value to change sensitivity

      if (Math.abs(dx) > threshold || Math.abs(dy) > threshold) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
        setLastMousePosition({ x: e.clientX, y: e.clientY });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const renderContent = () => {
    switch (name) {
      case "Resume":
        return <Resume />;
      case "website":
        return <iframe src={contents} width="100%" height="100%"></iframe>;
      case "folder":
        return <div>{contents}</div>;
      default:
        return <p>There's so much room for activities!</p>;
    }
  };

  return (
    <div
      className="window"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: "absolute",
      }}
      onMouseDown={handleMouseDown}
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
        <div className="actions">
          <div>File</div>
          <div>Edit</div>
          <div>View</div>
          <div>Help</div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default Program;
