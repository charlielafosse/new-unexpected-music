import React, { useState } from "react";

import BubbleBoard from "./components/BubbleBoard";
import Player from "./components/Player";
import Header from "./components/Header";

import { AppContainer } from "./App.style";
import CHANNELS from "./constants/channels";

const App = () => {
  const apiKey = "AIzaSyAf2mNxfsJgmJCWoTwXVc61fsqR7ksCnls";
  const [playlistId, setPlaylistId] = useState("");
  const [trackData, setTrackData] = useState({
    track: "poo by poo",
    channel: "poo channel",
    thumbnail: ""
  });
  const [trackId, setTrackId] = useState("?");
  const getRandomTrack = playlistId => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&key=${apiKey}&maxResults=50&part=snippet`
    )
      .then(response => response.json())
      .then(result => {
        console.log("res is", result);
        console.log(result.items[0]);
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
  console.log(trackData.thumbnail);
  return (
    <AppContainer color={"#0B1013"}>
      {/* <img src={`${trackData.thumbnail}`}></img> */}
      <Header text={trackData} />
      <BubbleBoard bubbleClick={bubbleClick} />
      <Player trackId={trackId}></Player>
    </AppContainer>
  );
};

export default App;
