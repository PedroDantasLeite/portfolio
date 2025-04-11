import React, { useState, useEffect } from "react";
import "./Program.css";
import Resume from "./Resume";
import SidebarCard from "./SidebarCard";
import { sidebarCards } from "./constants";

const Program = ({
  name,
  icon,
  contents,
  folderDetails = true,
  onClose,
  onMinimize,
  setFocusedProgram,
  focusedProgram,
  style,
  address = "address",
}) => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 150,
    y: window.innerHeight / 2 - 150,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setFocusedProgram(name);
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - lastMousePosition.x;
      const dy = e.clientY - lastMousePosition.y;
      const threshold = 5;

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
      className={`window ${focusedProgram !== name ? "unfocused" : ""}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        ...style,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className={`title-bar-background ${
          focusedProgram !== name ? "unfocused" : ""
        } `}
      />
      <header className="title-bar" onMouseDown={handleMouseDown}>
        <div className="title-bar-text" style={{ userSelect: "none" }}>
          <img src={icon} />
          {name}
        </div>
        <div
          className={`title-bar-controls ${
            focusedProgram !== name ? "unfocused" : ""
          }`}
        >
          <button aria-label="Minimize" onClick={onMinimize}>
            <img src="/small.png" />
          </button>
          <button aria-label="Maximize">
            <img src="/big.png" />
          </button>
          <button aria-label="Close" onClick={onClose}>
            <img src="/close.png" />
          </button>
        </div>
      </header>

      <div className="window-body">
        <div className="actions">
          <div className="com__function_bar">
            <div>File</div>
            <div>Edit</div>
            <div>View</div>
            <div>Help</div>
          </div>
          <img src="/windows-tab.png" />
        </div>
        {folderDetails && (
          <div className="folder-details">
            <img src="/arrow.png" />
            <p>Back</p>
            <div className="com__function_bar__arrow" />
            <img src="/arrow.png" style={{ transform: "scaleX(-1)" }} />
            <div className="com__function_bar__arrow" />
            <img src="/yeah.png" />
            <div className="com__function_bar__separate" />
            <img src="/lupa.ico" />
            <p>Search</p>
            <img src="/folder_clean.ico" />
            <p>Folders</p>
            <div className="com__function_bar__separate" />
            <img src="/pastinha.ico" />
            <div className="com__function_bar__arrow" />
          </div>
        )}
        <div className="address">
          <p className="addressLabel">Address</p>
          <span className="address_bar">
            <div className="leftside">
              <img src={icon} />
              <p>{address}</p>
            </div>
            <div className="rightside">
              <img src="/little-down-arrow.png" />
            </div>
          </span>
          <img className="square-arrow" src="/square-arrow.ico" />
          <p>Go</p>
        </div>
        <div className="content">
          <div className="content-sidebar">
            {sidebarCards.map((card, index) => (
              <SidebarCard key={index} title={card.title} rows={card.rows} />
            ))}
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Program;
