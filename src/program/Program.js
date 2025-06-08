import React, { useState, useEffect } from "react";
import "./Program.css";
import SidebarCard from "./SidebarCard";
import { sidebarCards } from "../constants";
import ProgramHeader from "./ProgramHeader";
import ProgramToolbar from "./ProgramToolbar";
import FolderView from "./FolderView";
import Photos from "../contents/Photos";

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
  const [isMaximized, setIsMaximized] = useState(false);
  const [prevState, setPrevState] = useState({
    x: position.x,
    y: position.y,
  });

  const [selectedContent, setSelectedContent] = useState(null);

  // Add these for Photos navigation
  const [photosOpenedPhoto, setPhotosOpenedPhoto] = useState(null);
  const [photosSelectedPhoto, setPhotosSelectedPhoto] = useState(null);

  const handleBack = () => {
    if (selectedContent && selectedContent.name === "Photos") {
      if (photosOpenedPhoto) {
        setPhotosOpenedPhoto(null); // Go from PhotoView to Photos grid
      } else {
        setSelectedContent(null); // Go from Photos grid to FolderView
      }
    } else {
      setSelectedContent(null);
    }
  };

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

  const renderContents = () => {
    if (folderItems) {
      if (selectedContent) {
        // Special handling for Photos
        if (selectedContent.name === "Photos") {
          return (
            <Photos
              openedPhoto={photosOpenedPhoto}
              setOpenedPhoto={setPhotosOpenedPhoto}
              selectedPhoto={photosSelectedPhoto}
              setSelectedPhoto={setPhotosSelectedPhoto}
            />
          );
        }
        // Other content
        return selectedContent.contents;
      }
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

  const handleMaximize = () => {
    if (!isMaximized) {
      setPrevState({
        position: { ...position },
      });
      setPosition({ x: 0, y: 0 });
    } else {
      if (prevState.position) setPosition(prevState.position);
    }
    setIsMaximized(!isMaximized);
  };

  return (
    <div
      className={`window ${focusedProgram !== name ? "unfocused" : ""} ${
        isMaximized ? "window-maximized" : ""
      }`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: isMaximized ? "100vw" : undefined,
        height: isMaximized ? "100vh" : undefined,
        ...style,
      }}
      onMouseDown={handleMouseDown}
    >
      <ProgramHeader
        name={name}
        icon={icon}
        onClose={onClose}
        onMinimize={onMinimize}
        handleMaximize={handleMaximize}
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
          {renderContents()}
        </div>
      </div>
    </div>
  );
};

export default Program;
