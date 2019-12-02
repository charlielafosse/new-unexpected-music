import React, { useState } from "react";

import { BubbleDiv, BubbleOverlay } from "./Bubble.style";

const Bubble = ({
  animations,
  dimDelay,
  floatTime,
  handleClick,
  marginTop,
  marginRight,
  handleHover,
  position,
  size,
  color
}) => {
  const randomReturn = args => args[Math.floor(Math.random() * args.length)];
  const [animation, setAnimation] = useState(randomReturn(animations));
  // setInterval(() => setAnimation(randomReturn(animations)), dimDelay);
  return (
    <BubbleDiv
      onMouseOver={handleHover}
      onClick={handleClick}
      size={size}
      animation={animation}
      dimDelay={dimDelay}
      marginTop={marginTop}
      marginRight={marginRight}
      floatTime={floatTime}
      position={position}
    >
      <BubbleOverlay color={color}></BubbleOverlay>
    </BubbleDiv>
  );
};
export default Bubble;
