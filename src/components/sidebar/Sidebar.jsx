import React from "react";
import "./sidebar.css";
import SidebarButton from "./SidebarButton";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../../spotify";
export default function Sidebar() {
  const [avatar, setAvatar] = useState("./img/profile-image.jpeg");
  useEffect(() => {
    apiClient.get("me").then((response) => {
      //   console.log(response.data);
      setAvatar(response.data.images[0].url);
    });
  });
  return (
    <div className="sidebar-container">
      <img className="profile-img" src={avatar} alt="Updating...." />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
