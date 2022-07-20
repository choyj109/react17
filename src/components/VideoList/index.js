import React from "react";
import "./index.css";
import VideoItem from "../VideoItem/index";
import { useDispatch, useSelector } from "react-redux";
import { getVideoList } from "../../store/video/videoSlice";
import { useEffect } from "react";

const VideoList = () => {
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.video.data);
  useEffect(() => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=AIzaSyAhFLFwT3drY584SzxWQj9mIqworRr5Cl0`;
    dispatch(getVideoList(url));
  }, [dispatch]);
  return (
    <ul className="videoList videoGrid">
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
