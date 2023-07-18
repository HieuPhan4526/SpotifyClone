import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import APIKit from "../../spotify";
import "./library.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("/me/playlists").then(function (response) {
      setPlaylists(response.data.items);
    });
  }, []);
  const navigate = useNavigate();

  const playPlayList = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist, index) => {
          return (
            <Fragment key={index}>
              <div
                className="playlist-card"
                onClick={() => {
                  playPlayList(playlist.id);
                }}
              >
                <img
                  src={playlist.images[0]?.url}
                  alt="PlayList-Art"
                  className="playlist-image"
                />
                <p className="playList-title">{playlist.name}</p>
                <p className="playList-subTitle">
                  {playlist.tracks.total} Songs
                </p>
                <div className="playList-fade">
                  <IconContext.Provider
                    value={{ size: "50px", color: "#E99D72" }}
                  >
                    <AiFillPlayCircle />
                  </IconContext.Provider>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
