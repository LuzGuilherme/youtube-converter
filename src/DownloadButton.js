import React from "react";

function DownloadButton({id, type, stopSpinner}) {

  return (
    <div>
      <iframe
        className="button-api-frame"
        src={`https://www.yt-download.org/api/button/${type}/${id}`}
        onLoad={console.log("component loaded")}
      >
      </iframe>
    </div>
  );
}

export default DownloadButton;
