import React, { useState } from "react";

import BubbleBoard from "./components/BubbleBoard";
import Bubble from "./components/Bubble";
import Player from "./components/Player";
import Header from "./components/Header";

import { AppContainer } from "./App.style";
import CHANNELS from "./constants/channels";
import BUBBLE_STYLES from "./constants/bubbleStyles";
import COLORS from "./constants/colors";

import randomReturn from "./utils/randomReturn";
import selectChannels from "./utils/selectChannels";

const App = () => {
  const apiKey = process.env.YOUTUBE_API_KEY;

  const [trackData, setTrackData] = useState({
    track: "unexpected music",
    channel: "prunus mume",
    channelId: ""
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
        setTrackData({
          track: trackSnippet.title,
          channel: trackSnippet.channelTitle,
          channelId: trackSnippet.channelId
        });
        setTrackId(trackSnippet.resourceId.videoId);
      })
      .catch(err => console.error(err));
  };
  const selectedChannels = selectChannels(CHANNELS, BUBBLE_STYLES);
  const bubbleClick = playlistId => getRandomTrack(playlistId);
  return (
    <AppContainer color={"#0B1013"}>
      <Header trackData={trackData} />
      <BubbleBoard>
        {selectedChannels.map((channel, i) => (
          <Bubble
            bubbleStyle={BUBBLE_STYLES[i]}
            handleClick={() => bubbleClick(channel)}
            color={randomReturn(COLORS)}
          />
        ))}
      </BubbleBoard>
      <Player trackId={trackId}></Player>
    </AppContainer>
  );
};

export default App;
