import React from "react";

import { Container, Track, Channel } from "./Header.style";

const Header = ({ text }) => (
  <Container>
    <Track>{text.track}</Track>
    <Channel>{text.channel}</Channel>
  </Container>
);

export default Header;
