import React, { useState } from "react";

import BubbleBoard from "./components/BubbleBoard";
import Player from "./components/Player";
import Header from "./components/Header";

import { AppContainer } from "./App.style";
import CHANNELS from "./constants/channels";

const App = () => {
  const bla = {
    0: { x: 3, y: 1, size: 70, delay: 1200, floatTime: 2 },
    1: { x: 5, y: 1, size: 220, delay: 2000, floatTime: 2.6 },
    2: { x: 8, y: 1, size: 140, delay: 1600, floatTime: 2 },
    3: { x: 2, y: 3, size: 110, delay: 1200, floatTime: 2.2 },
    4: { x: 6, y: 3, size: 70, delay: 2000, floatTime: 2 },
    5: { x: 9, y: 3, size: 70, delay: 1200, floatTime: 2.4 },
    6: { x: 2, y: 5, size: 70, delay: 2000, floatTime: 2.6 },
    7: { x: 4, y: 5, size: 70, delay: 1600, floatTime: 2.2 },
    8: { x: 8, y: 5, size: 90, delay: 1200, floatTime: 2.4 }
  };
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

        // these state changes mean that all children are rerendered each time
        // how do we avoid?

        // setTrackData({
        //   track: trackSnippet.title,
        //   channel: trackSnippet.channelTitle,
        //   thumbnail: trackSnippet.thumbnails.high.url
        // });
        // setTrackId(trackSnippet.resourceId.videoId);
      })
      .catch(err => console.error(err));
  };
  const selectChannels = channels => {
    const channelIds = Object.keys(channels);
    return Object.keys(bla).reduce(acc => {
      const randomNo = Math.floor(Math.random() * channelIds.length);
      const channel = channelIds.splice(randomNo, 1);
      return acc.concat(channel);
    }, []);
  };

  const selectedChannels = selectChannels(CHANNELS);
  const bubbleClick = playlistId => getRandomTrack(playlistId);
  return (
    <AppContainer color={"#0B1013"}>
      <Header text={trackData} />
      <BubbleBoard
        selectedChannels={selectedChannels}
        bubbleClick={bubbleClick}
      />
      <Player trackId={trackId}></Player>
    </AppContainer>
  );
};

export default App;
