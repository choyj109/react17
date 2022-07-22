import React from "react";
import "./index.css";
import VideoItem from "../VideoItem/index";
import { useDispatch, useSelector } from "react-redux";
import { getVideoList } from "../../store/video/videoSlice";
import { useEffect, useState } from "react";
import { videoUrl } from "../../lib/api";
import { MoonLoader } from "react-spinners";

const VideoList = ({ display }) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.video);
  useEffect(() => {
    dispatch(getVideoList(videoUrl));
  }, []);

  if (loading) {
    return (
      <MoonLoader
        color="#8e4d4d"
        cssOverride={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%,-50%)`,
        }}
        loading={loading}
        size={150}
        speedMultiplier={0.5}
      />
    );
  }
  return (
    <ul
      className={
        display === "grid" ? "videoList videoGrid" : "videoList videoRowList"
      }
    >
      {data.map((item, idx) => {
        return (
          <VideoItem
            key={item.snippet.thumbnails.default.url}
            item={item.snippet}
            value={item}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
