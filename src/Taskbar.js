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

  return (
    <footer className="taskbar">
      <div className="left">
        <img className="start" src="/start-button.png" alt="start" />
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
