import React from "react";
import ReactPlayer from "react-player";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
      <ReactPlayer url={embedId} />
  </div>
);

export default YoutubeEmbed;