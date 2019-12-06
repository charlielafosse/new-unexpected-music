import React from "react";

import { BubbleDiv, BubbleOverlay } from "./Bubble.style";

const Bubble = ({ bubbleStyle, handleClick, color }) => {
  const { dimDelay, floatTime, size, x, y } = bubbleStyle;
  return (
    <BubbleDiv
      onClick={handleClick}
      size={size}
      dimDelay={dimDelay}
      floatTime={floatTime}
      position={{ x, y }}
    >
      <BubbleOverlay size={size} color={color}></BubbleOverlay>
    </BubbleDiv>
  );
};
export default Bubble;
