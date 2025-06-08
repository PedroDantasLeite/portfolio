import React from "react";
import "./PhotoView.css";

const PhotoView = ({ src, alt, caption }) => (
  <div className="photo-view">
    <div className="photo-view__image-container">
      <img src={src} alt={alt || "Photo"} className="photo-view__image" />
    </div>
    <div>
      <button></button>
      <button></button>
    </div>
  </div>
);

export default PhotoView;
