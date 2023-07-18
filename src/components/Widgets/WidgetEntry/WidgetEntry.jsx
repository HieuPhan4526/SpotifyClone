import React from "react";
import "./widgetEntryCss.css";

export default function WidgetEntry({ title, subtitle, image }) {
  return (
    <div className="entry-body flex">
      <img className="entry-image" src={image} alt={title} />
      <div className="entry-right-body flex">
        <p className="entry-title">{title}</p>
        <p className="entry-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
