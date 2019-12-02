import React from "react";

import { iFrame } from "./Player.style";

const Player = ({ trackId }) => (
  <iFrame
    width="0"
    height="0"
    src={`https://www.youtube.com/embed/${trackId}?enablejsapi=1
    // &autoplay=1
    `}
    frameBorder="0"
  ></iFrame>
);

export default Player;
