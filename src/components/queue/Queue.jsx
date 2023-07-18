import React from "react";
import "./queue.css";

export default function Queue(props) {
  const { tracks, setCurrentIndex } = props;
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks?.map((item, index) => {
            return (
              <div
                className="queue-item flex"
                key={item.track.id}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              >
                <p className="track-name">{item.track.name}</p>
                <p>0:30</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
