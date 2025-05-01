import React from "react";

const ProgramToolbar = ({ icon, address, onBack }) => (
  <>
    <div className="actions">
      <div className="com__function_bar">
        <div>File</div>
        <div>Edit</div>
        <div>View</div>
        <div>Help</div>
      </div>
      <img src="/windows-tab.png" />
    </div>
    <div className="folder-details">
      <img
        src="/arrow.png"
        style={{ cursor: onBack ? "pointer" : "default" }}
        onClick={onBack}
        alt="Back"
      />
      <p style={{ cursor: onBack ? "pointer" : "default" }} onClick={onBack}>
        Back
      </p>
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
  </>
);

export default ProgramToolbar;
