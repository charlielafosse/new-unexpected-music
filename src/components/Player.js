import React from "react";

import { iFrame } from "./Player.style";

const Player = ({ trackId }) => (
  <iFrame
    width="0"
    height="0"
    src={`https://www.youtube.com/embed/${trackId}?autoplay=1`}
    frameBorder="0"
    allow="autoplay"
  ></iFrame>
);

export default Player;
