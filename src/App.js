import React, { useState } from "react";

import BubbleBoard from "./components/BubbleBoard";
import Bubble from "./components/Bubble";
import Player from "./components/Player";
import { Footer, Header } from "./components/Header";

import { AppContainer, Help, Menu, Splash } from "./App.style";
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
    channelId: "",
    trackId: ""
  });

  const [isMenuVisible, setMenuVisibility] = useState(false);

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
          channelId: trackSnippet.channelId,
          trackId: trackSnippet.resourceId.videoId
        });
      })
      .catch(err => console.error(err));
  };
  const selectedChannels = selectChannels(CHANNELS, BUBBLE_STYLES);
  const bubbleClick = playlistId => getRandomTrack(playlistId);
  const showMenu = () => setMenuVisibility(!isMenuVisible);
  return (
    <AppContainer color={"#0B1013"}>
      <Help onClick={() => showMenu()}>?</Help>
      <Menu show={isMenuVisible}>
        Click a bubble to discover a new song. <br></br>
        <br></br> You can select the track or channel name for more info.{" "}
      </Menu>
      <Splash>
        <Header trackData={trackData} />
      </Splash>
      <BubbleBoard>
        {selectedChannels.map((channel, i) => (
          <Bubble
            key={i}
            bubbleStyle={BUBBLE_STYLES[i]}
            handleClick={() => bubbleClick(channel)}
            color={randomReturn(COLORS)}
          />
        ))}
      </BubbleBoard>
      <Player trackId={trackData.trackId}></Player>
      {/* <Footer></Footer> */}
    </AppContainer>
  );
};

export default App;
