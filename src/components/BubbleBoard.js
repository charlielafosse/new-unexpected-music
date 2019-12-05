import React, { useState } from "react";

import { Grid } from "./BubbleBoard.style";
import Bubble from "./Bubble";

const Container = ({ bubbleClick, selectedChannels }) => {
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
  const colors = [
    "transparent",
    "#F75C2F",
    "#FC9F4D",
    "#DB4D6D",
    "#947A6D",
    "#82CD9B",
    "#E98B2A"
  ];
  // const margins = [0, 20, 20, 60, 60, -20, -20, -60, -60];
  // const delays = [1200, 2000, 1600];
  // const floatTimes = [2, 2.2, 2.4];
  // const sizes = [220, 140, 110, 70];
  const randomReturn = args => args[Math.floor(Math.random() * args.length)];

  console.log(selectedChannels);

  // const handleHover = () => console.log("hover");
  // func for passing down the dim animation prop to random bubbles
  return (
    <Grid>
      {selectedChannels.map((channel, i) => (
        <Bubble
          dimDelay={bla[i].delay}
          floatTime={bla[i].floatTime}
          // size={randomReturn(sizes)}
          size={bla[i].size}
          // marginTop={randomReturn(margins)}
          // marginRight={randomReturn(margins)}
          // handleHover={handleHover}
          handleClick={() => bubbleClick(channel)}
          text={channel}
          color={randomReturn(colors)}
          position={bla[i]}
        />
      ))}
    </Grid>
  );
};

export default Container;
