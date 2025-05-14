import React, { useState } from "react";
import "./FolderView.css";

const FolderView = ({
  items,
  selectedContent,
  setSelectedContent,
  renderContent,
}) => {
  const [localSelectedContent, localSetSelectedContent] = useState(null);
  const content =
    selectedContent !== undefined ? selectedContent : localSelectedContent;
  const setContent =
    setSelectedContent !== undefined
      ? setSelectedContent
      : localSetSelectedContent;

  const handleIconDoubleClick = (item) => setContent(item);

  if (content) {
    return (
      <React.Fragment>
        {renderContent ? renderContent(content) : content.contents}
      </React.Fragment>
    );
  }

  return (
    <div className="folder-content-default">
      {items.map((item, index) => (
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

export default FolderView;
