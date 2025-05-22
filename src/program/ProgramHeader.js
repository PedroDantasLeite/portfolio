import React from "react";

const ProgramHeader = ({
  name,
  icon,
  onClose,
  onMinimize,
  focusedProgram,
  handleMouseDown,
  handleMaximize,
}) => (
  <>
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
        <button aria-label="Maximize" onClick={() => handleMaximize()}>
          <img src="/big.png" />
        </button>
        <button aria-label="Close" onClick={onClose}>
          <img src="/close.png" />
        </button>
      </div>
    </header>
  </>
);

export default ProgramHeader;
