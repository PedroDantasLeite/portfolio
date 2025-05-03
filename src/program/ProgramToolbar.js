import React from "react";
import "./Program.css";

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
      <div className="omg">
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
      </div>
      <div className="omg">
        <img src="/arrow.png" style={{ transform: "scaleX(-1)" }} />
        <div className="com__function_bar__arrow" />
      </div>
      <div className="omg">
        <img src="/yeah.png" />
      </div>
      <div className="com__function_bar__separate" />
      <div className="omg">
        <img src="/lupa.ico" />
        <p>Search</p>
      </div>
      <div className="omg">
        <img src="/folder_clean.ico" />
        <p>Folders</p>
      </div>
      <div className="com__function_bar__separate" />
      <div className="omg">
        <img src="/pastinha.ico" />
        <div className="com__function_bar__arrow" />
      </div>
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
