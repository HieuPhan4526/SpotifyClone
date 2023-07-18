import React, { Fragment } from "react";
import "./controlCss.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import {
  IoPlaySkipBack,
  IoPlay,
  IoPlaySkipForward,
  IoRepeat,
  IoShuffleOutline,
} from "react-icons/io5";

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  const handleShuffle = () => {};

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const handleRepeat = () => {};

  return (
    <Fragment>
      <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
        <div className="controls-wrapper flex">
          <div className="action-btn flex" onClick={handleShuffle}>
            <IoShuffleOutline />
          </div>
          <div className="action-btn flex" onClick={handlePrev}>
            <IoPlaySkipBack />
          </div>
          <div
            className={`${
              isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
            }`}
            onClick={handlePlayPause}
          >
            {isPlaying ? <FaPause /> : <IoPlay />}
          </div>
          <div className="action-btn flex" onClick={handleNext}>
            <IoPlaySkipForward />
          </div>
          <div className="action-btn flex" onClick={handleRepeat}>
            <IoRepeat />
          </div>
        </div>
      </IconContext.Provider>
    </Fragment>
  );
}
