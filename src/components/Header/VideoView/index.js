import React from "react";

const VideoView = ({ id }) => {
  return (
    <div className="playVideoBox">
      <div className="iframeBox">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="youtube video"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoView;
