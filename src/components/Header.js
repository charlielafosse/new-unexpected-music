import React from "react";

import { Anchor, Container, Track, Channel } from "./Header.style";

const Header = ({ trackData }) => (
  <Container>
    <Track>{trackData.track}</Track>
    <Channel>
      <Anchor
        href={
          trackData.channelId.length < 1
            ? `https://prunusmumethoughts.wordpress.com/`
            : `https://www.youtube.com/channel/${trackData.channelId}`
        }
        target="_blank"
      >
        {trackData.channel}
      </Anchor>
    </Channel>
  </Container>
);

export default Header;
