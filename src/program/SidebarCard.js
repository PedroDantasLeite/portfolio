import React from "react";
import "./SidebarCard.css";
import SidebarCardRow from "./SidebarCardRow";

const SidebarCard = ({ key, title, rows }) => {
  return (
    <div className="sidebar-card">
      <div className="sidebar-card-header">{title}</div>
      <div className="sidebar-card-content">
        {rows.map((row, index) => (
          <SidebarCardRow key={index} label={row.label} icon={row.icon} />
        ))}
      </div>
    </div>
  );
};

export default SidebarCard;
