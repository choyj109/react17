import React from "react";

const VideoView = ({ id }) => {
  return (
    <div className="playVideoBox">
      <div className="iframeBox">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title="youtube video"
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="descriptionContainer"></div>
    </div>
  );
};

export default VideoView;
