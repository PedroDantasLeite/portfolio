import React, { useState, useEffect } from "react";
import "./Program.css";
import SidebarCard from "./SidebarCard";
import { sidebarCards } from "../constants";
import ProgramHeader from "./ProgramHeader";
import ProgramToolbar from "./ProgramToolbar";
import FolderView from "./FolderView";

const Program = ({
  name,
  icon,
  contents,
  folderItems,
  onClose,
  onMinimize,
  setFocusedProgram,
  focusedProgram,
  style,
  address,
  completeHeader = true,
}) => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 150,
    y: window.innerHeight / 2 - 150,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  // Generic selected content state for folders
  const [selectedContent, setSelectedContent] = useState(null);
  const handleBack = () => setSelectedContent(null);

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

  // Render folder or regular content
  const renderContents = () => {
    if (folderItems) {
      return (
        <FolderView
          items={folderItems}
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
        />
      );
    }
    return contents;
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
      <ProgramHeader
        name={name}
        icon={icon}
        onClose={onClose}
        onMinimize={onMinimize}
        focusedProgram={focusedProgram}
        handleMouseDown={handleMouseDown}
      />
      <div className="window-body">
        {completeHeader && (
          <ProgramToolbar
            icon={icon}
            address={address}
            onBack={folderItems && selectedContent ? handleBack : undefined}
          />
        )}
        <div className="content">
          {completeHeader && (
            <div className="content-sidebar">
              {sidebarCards.map((card, index) => (
                <SidebarCard
                  cardIndex={index}
                  title={card.title}
                  rows={card.rows}
                  key={index}
                />
              ))}
            </div>
          )}
          <div>{renderContents()}</div>
        </div>
      </div>
    </div>
  );
};

export default Program;
