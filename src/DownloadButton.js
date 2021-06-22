import React from "react";

function DownloadButton({id, type}) {
  return (
    <div>
      <iframe
        className="button-api-frame"
        src={`https://www.yt-download.org/api/button/mp3/${id}`}
      >
      </iframe>
    </div>
  );
}

export default DownloadButton;
