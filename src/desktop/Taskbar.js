import React, { useState, useEffect, useRef } from "react";
import "./Taskbar.css";
import StartMenu from "./StartMenu";

const Taskbar = ({
  programs,
  focusedProgram,
  setFocusedProgram,
  onRestore,
}) => {
  const [time] = useState(
    new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  );
  const [startButtonState, setStartButtonState] = useState("default");
  const [startMenu, setStartMenu] = useState(false);
  const startMenuRef = useRef(null);

  const getStartButtonSrc = () => {
    switch (startButtonState) {
      case "hover":
        return "/start-button-hover.png";
      case "pressed":
        return "/start-button-pressed.png";
      default:
        return "/start-button.png";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target)
      ) {
        setStartMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <footer className="taskbar">
      <div className="left" ref={startMenuRef}>
        {startMenu && <StartMenu />}
        <img
          className="start"
          src={getStartButtonSrc()}
          alt="start"
          onMouseEnter={() => setStartButtonState("hover")}
          onMouseLeave={() => setStartButtonState("default")}
          onMouseDown={() => setStartButtonState("pressed")}
          onMouseUp={() => setStartButtonState("hover")}
          onClick={() => setStartMenu(!startMenu)}
        />
        {programs.map((program, index) => (
          <div
            key={index}
            className={`taskbar-item ${
              focusedProgram === program.name && !program.minimized
                ? "focused"
                : ""
            }`}
            onClick={() => {
              setFocusedProgram(program.name);
              onRestore(program.name);
            }}
          >
            <img src={program.icon} alt={program.name} />
            {program.name}
          </div>
        ))}
      </div>
      <div className="right">
        <img src="/sound.ico" alt="sound" />
        <img src="/safety.ico" alt="network" />
        <img src="/network.ico" alt="network" />
        <div className="taskbar-clock">{time}</div>
      </div>
    </footer>
  );
};

export default Taskbar;
