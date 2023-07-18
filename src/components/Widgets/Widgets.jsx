import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../../spotify";
import WidgetCard from "./WidgetCard/WidgetCard";
import "./widgetsCSS.css";

export default function Widgets({ artistID }) {
  const [similar, setSimilar] = useState([]);

  const [featured, setFeatured] = useState([]);

  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    async function getData() {
      if (artistID) {
        await apiClient
          .get(`/artists/${artistID}/related-artists`)
          .then((res) => {
            const data = res.data.artists.slice(0, 3);
            setSimilar(data);
          })
          .catch((err) => {
            console.log(err);
          });
        await apiClient
          .get(`/browse/featured-playlists`)
          .then((res) => {
            const data = res.data.playlists.items.slice(0, 3);
            setFeatured(data);
          })
          .catch((err) => {
            console.log(err);
          });
        await apiClient
          .get(`/browse/new-releases`)
          .then((res) => {
            const data = res.data.albums.items.slice(0, 3);
            setNewRelease(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    getData();
  }, [artistID]);
  return (
    <div className="widgets-body flex">
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Made for you" featured={featured} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
}
