import React from "react";
import "./index.css";

<<<<<<< HEAD
const VideoItem = ({ item }) => {
  return (
    <li className="videoItem videoItemGrid">
      <img
        src={item.thumbnails.medium.url}
        alt="썸네일"
        className="thumbnail-img"
      />
      <div className="descriptionBox">
        <div className="description">
          <h2 className="videoTitle">{item.title}</h2>
          <h3 className="channelTitle">{item.channelTitle}</h3>
        </div>
      </div>
    </li>
  );
=======
const VideoItem = ({item}) => {
 
  
    return (
        <li className='videoItem videoItemGrid'>
          <img src={item.thumbnails.medium.url} alt='비디오썸네일' className='thumbnail-img' />
          <div className='descriptionBox'>
            <div className='description'>
                  <h2 className='videoTitle'>{item.title}</h2>
                  <h3 className='channelTitle'>{item.channelTitle}</h3>
            </div>
          </div>
        </li>
    );
>>>>>>> 7029b56878acd079ca340aa91d2f7fb95b74f887
};

export default VideoItem;
