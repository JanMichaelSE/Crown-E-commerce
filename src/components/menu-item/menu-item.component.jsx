import React from "react";
import "./menu-item.component.scss";
export const MenuItem = ({ section }) => {
  return (
    <div className={`${section.size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${section.imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{section.title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};
