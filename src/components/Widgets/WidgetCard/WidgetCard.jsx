import React from "react";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import WidgetEntry from "../WidgetEntry/WidgetEntry";
import "./widgetCardCss.css";

export default function WidgetCard({ title, similar, featured, newRelease }) {
  return (
    <div className="widgetCard-body">
      <p className="widget-title">{title}</p>
      {similar
        ? similar?.map((artist, index) => {
            return (
              <WidgetEntry
                key={index}
                title={artist.name}
                subtitle={artist.followers?.total + " Followers"}
                image={artist.images[2]?.url}
              />
            );
          })
        : featured
        ? featured?.map((playlist, index) => {
            return (
              <WidgetEntry
                key={index}
                title={playlist.name}
                subtitle={playlist.tracks?.total + " Songs"}
                image={playlist.images[0]?.url}
              />
            );
          })
        : newRelease
        ? newRelease?.map((album, index) => {
            return (
              <WidgetEntry
                key={index}
                title={album.name}
                subtitle={album.artists[0]?.name}
                image={album.images[2]?.url}
              />
            );
          })
        : null}
      <div className="widget-fade">
        <div className="fade-button">
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
