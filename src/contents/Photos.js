import React, { useState } from "react";
import { myPhotos } from "../constants";
import "./Photos.css";

const PhotoIcon = ({ photo, selected }) => {
  return (
    <div
      style={{
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid rgb(228, 228, 228)",
          height: "80px",
          width: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={photo.image}
          alt={photo.label}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            display: "block",
          }}
        />
      </div>
      <p
        className={`${selected ? "soannoying" : ""}`}
        style={{ fontSize: "12px" }}
      >
        {photo.label}
      </p>
    </div>
  );
};

const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  console.log(selectedPhoto);

  const handleClick = (label) => {
    setSelectedPhoto(label);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
      }}
    >
      {myPhotos.map((photo) => (
        <div
          key={photo.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => handleClick(photo.label)}
        >
          <PhotoIcon photo={photo} selected={photo.label === selectedPhoto} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
