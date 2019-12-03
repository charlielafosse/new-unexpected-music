import React from "react";

import { BubbleDiv, BubbleOverlay } from "./Bubble.style";

const Bubble = ({
  dimDelay,
  floatTime,
  handleClick,
  // marginTop,
  // marginRight,
  position,
  size,
  color
}) => {
  return (
    <BubbleDiv
      onClick={handleClick}
      size={size}
      dimDelay={dimDelay}
      // marginTop={marginTop}
      // marginRight={marginRight}
      floatTime={floatTime}
      position={position}
    >
      <BubbleOverlay size={size} color={color}></BubbleOverlay>
    </BubbleDiv>
  );
};
export default Bubble;
