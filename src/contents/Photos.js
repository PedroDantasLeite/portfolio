import React from "react";
import { myPhotos } from "../constants";
import "./Photos.css";
import PhotoView from "../program/PhotoView";

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

// Make Photos a controlled component
const Photos = ({
  openedPhoto,
  setOpenedPhoto,
  selectedPhoto,
  setSelectedPhoto,
}) => {
  const handleClick = (label) => {
    setSelectedPhoto && setSelectedPhoto(label);
  };

  const handleDoubleClick = (photo) => {
    setOpenedPhoto && setOpenedPhoto(photo);
  };

  if (openedPhoto) {
    return (
      <PhotoView
        src={openedPhoto.image}
        alt={openedPhoto.label}
        caption={openedPhoto.label}
      />
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "16px",
        width: "100%",
        justifyItems: "center",
        alignItems: "start",
      }}
    >
      {myPhotos.map((photo) => (
        <div
          key={photo.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          onClick={() => handleClick(photo.label)}
          onDoubleClick={() => handleDoubleClick(photo)}
        >
          <PhotoIcon photo={photo} selected={photo.label === selectedPhoto} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
