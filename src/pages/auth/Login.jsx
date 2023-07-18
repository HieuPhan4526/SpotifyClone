import React from "react";
import { logionEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        className="logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      <a className="login-btn" href={logionEndpoint}>
        LOG IN
      </a>
    </div>
  );
}
