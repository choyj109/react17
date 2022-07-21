import React from "react";
import "./index.css";
import VideoItem from "../VideoItem/index";
import { useDispatch, useSelector } from "react-redux";
import { getVideoList } from "../../store/video/videoSlice";
import { useEffect } from "react";
import { videoUrl } from "../../lib/api";

const VideoList = ({ display }) => {
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.video.data);
  useEffect(() => {
    dispatch(getVideoList(videoUrl));
  }, [dispatch]);
  return (
    <ul
      className={
        display === "grid" ? "videoList videoGrid" : "videoList videoRowList"
      }
    >
      {videoData.map((item, idx) => {
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
