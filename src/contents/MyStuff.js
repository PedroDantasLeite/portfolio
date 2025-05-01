import React from "react";
import "./MyStuff.css";
import { myStuffContents } from "../constants";

const MyStuff = ({ selectedContent, setSelectedContent }) => {
  const [localSelectedContent, localSetSelectedContent] = React.useState(null);
  const content =
    selectedContent !== undefined ? selectedContent : localSelectedContent;
  const setContent =
    setSelectedContent !== undefined
      ? setSelectedContent
      : localSetSelectedContent;

  const handleIconDoubleClick = (item) => {
    setContent(item);
  };

  if (content) {
    return (
      <div className="folder-content-detail">
        <div className="folder-detail-content">{content.contents}</div>
      </div>
    );
  }

  return (
    <div className="folder-content-default">
      {myStuffContents.map((item, index) => (
        <div
          key={index}
          className="folder-item"
          onDoubleClick={() => handleIconDoubleClick(item)}
        >
          <img src={item.icon} alt={item.name} className="folder-item-icon" />
          <span className="folder-item-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MyStuff;
