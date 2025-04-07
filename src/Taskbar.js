import React, { useState } from "react";
import "./Taskbar.css";

const Taskbar = ({ programs, focusedProgram, setFocusedProgram }) => {
  const [time] = useState(
    new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  );
  const [startButtonState, setStartButtonState] = useState("default"); // default, hover, pressed

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

  return (
    <footer className="taskbar">
      <div className="left">
        <img
          className="start"
          src={getStartButtonSrc()}
          alt="start"
          onMouseEnter={() => setStartButtonState("hover")}
          onMouseLeave={() => setStartButtonState("default")}
          onMouseDown={() => setStartButtonState("pressed")}
          onMouseUp={() => setStartButtonState("hover")}
        />
        {programs.map((program, index) => (
          <div
            key={index}
            className={`taskbar-item ${
              focusedProgram === program.name ? "focused" : ""
            }`}
            onClick={() => setFocusedProgram(program.name)}
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
