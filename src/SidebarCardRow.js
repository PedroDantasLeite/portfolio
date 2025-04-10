import React from "react";
import "./SidebarCardRow.css";

const SidebarCardRow = ({ key, label, icon }) => {
  return (
    <div className="sidebar-card-row">
      <img src={icon} className="sidebar-card-icon" />
      {label}
    </div>
  );
};

export default SidebarCardRow;
