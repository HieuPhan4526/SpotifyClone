import React, { Fragment } from "react";
import "./albumImage.css";

export default function AlbumImage(props) {
  const { url } = props;
  return (
    <Fragment>
      <div className="albumImage flex">
        <img src={url} alt="album art" className="albumImage-art" />
        <div className="albumImage-shadow">
          <img src={url} alt="shadow" className="albumImage-shadow" />
        </div>
      </div>
    </Fragment>
  );
}
