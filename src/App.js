import React, { useState, useEffect } from "react";
import DownloadButton from "./DownloadButton";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [id, setId] = useState("");


  useEffect (() => {
    const id = videoUrl.replace('https://www.youtube.com/watch?v=', '');
    setId(id);
  }, [videoUrl])

  return (
    <div className="App">
      <div className="title">
        <h1>Youtube Converter</h1>
        <h2>
          Convert Youtube videos to MP3/MP4 files for free with our Youtube
          converter
        </h2>
      </div>
      <div className="main-box">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={(e) => setVideoUrl(e.target.value)}
            value={videoUrl}
            type="text"
            placeholder="Paste your youtube url here..."
          />
        </form>
        <DownloadButton id={id} type="mp3"/>
        <DownloadButton id={id} type="videos"/>
      </div>
    </div>
  );
}

export default App;
