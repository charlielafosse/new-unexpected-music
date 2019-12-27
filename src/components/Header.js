import React from "react";

import { Anchor, Container, Track, Channel } from "./Header.style";

export const Header = ({ trackData }) => (
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

// export const Footer = () => (
//   <Container>
//     <Channel>
//       Made with 💙 by
//       <Anchor href={`https://github.com/charlielafosse/`} target="_blank">
//         charlielafosse
//       </Anchor>
//     </Channel>
//   </Container>
// );
