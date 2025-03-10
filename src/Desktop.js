import React from "react";

const icons = [
  { id: 1, name: "My Projects", icon: "📂" },
  { id: 2, name: "About Me", icon: "📝" },
  { id: 3, name: "Contact", icon: "📧" },
];

const Desktop = () => {
  return (
    <div
      className="desktop"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: "url('/background1080.jpg')",
        backgroundSize: "cover",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "start",
        padding: "20px",
        position: "relative",
      }}
    >
      {icons.map((icon) => (
        <div key={icon.id}>
          <div className="icon" style={{ textAlign: "center", margin: "10px" }}>
            <div className="icon-img" style={{ fontSize: "40px" }}>{icon.icon}</div>
            <p className="icon-label" style={{ color: "white", marginTop: "5px" }}>
              {icon.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Desktop;