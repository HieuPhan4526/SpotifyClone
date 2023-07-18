import React from "react";
import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";
import "./songCard.css";

export default function SongCard(props) {
  const { album } = props;

  return (
    <div className="songCard-body flex">
      <AlbumImage url={album?.images[0].url} />
      <AlbumInfo album={album} />
    </div>
  );
}
