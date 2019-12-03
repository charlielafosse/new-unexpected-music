import React, { useState } from "react";

import BubbleBoard from "./components/BubbleBoard";
import Player from "./components/Player";
import Header from "./components/Header";

import { AppContainer } from "./App.style";
import CHANNELS from "./constants/channels";

const App = () => {
  const apiKey = "AIzaSyAf2mNxfsJgmJCWoTwXVc61fsqR7ksCnls";
  const [trackData, setTrackData] = useState({
    track: "unexpected music",
    channel: "prunus mume"
  });
  const [trackId, setTrackId] = useState("?");
  const getRandomTrack = playlistId => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&key=${apiKey}&maxResults=50&part=snippet`
    )
      .then(response => response.json())
      .then(result => {
        const trackSnippet =
          result.items[Math.floor(Math.random() * result.items.length)].snippet;
        console.log(trackSnippet.thumbnails.default);
        setTrackData({
          track: trackSnippet.title,
          channel: trackSnippet.channelTitle,
          thumbnail: trackSnippet.thumbnails.high.url
        });
        setTrackId(trackSnippet.resourceId.videoId);
      })
      .catch(err => console.error(err));
  };
  const bubbleClick = playlistId => getRandomTrack(playlistId);
  return (
    <AppContainer color={"#0B1013"}>
      <Header text={trackData} />
      <BubbleBoard channels={CHANNELS} bubbleClick={bubbleClick} />
      <Player trackId={trackId}></Player>
    </AppContainer>
  );
};

export default App;
