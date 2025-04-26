import React from "react";
import "./MyStuff.css";
import { myStuffContents } from "../constants";

const MyStuff = () => {
  return (
    <div className="folder-content-default">
      {myStuffContents.map((item, index) => (
        <div key={index} className="folder-item">
          <img src={item.icon} alt={item.name} className="folder-item-icon" />
          <span className="folder-item-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MyStuff;
