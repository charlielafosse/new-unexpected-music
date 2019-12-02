import React, { useState } from "react";

import { Grid } from "./BubbleBoard.style";
import Bubble from "./Bubble";

import CHANNELS from "../constants/channels";

const Container = ({ bubbleClick }) => {
  const animations = ["float", "dim", "dim", "dim"];
  const channels = CHANNELS;
  // this sorts the spacing, according to a grid that should
  // have 5 els per line
  const makePositions = arr => {
    let thing = -1;
    return arr.reduce((acc, cur, i) => {
      if (thing >= 9) thing = -1;
      const y = Math.ceil((i + 1) / 5);
      const x = y % 2 !== 0 ? thing + 2 : thing === -1 ? thing + 3 : thing + 1;
      thing += 2;
      return { ...acc, [i]: { x, y } };
    }, {});
  };
  const grid = makePositions(Object.keys(channels));
  console.log(grid);
  const bla = {
    0: { x: 2, y: 1 },
    1: { x: 4, y: 1 },
    2: { x: 7, y: 1 },
    3: { x: 1, y: 2 },
    4: { x: 3, y: 2 },
    5: { x: 5, y: 2 },
    6: { x: 2, y: 3 },
    7: { x: 4, y: 3 },
    8: { x: 6, y: 3 },
    9: { x: 8, y: 4 },
    10: { x: 1, y: 4 },
    11: { x: 3, y: 4 },
    12: { x: 5, y: 5 },
    13: { x: 7, y: 5 },
    14: { x: 9, y: 5 },
    15: { x: 2, y: 6 },
    16: { x: 2, y: 6 },
    17: { x: 4, y: 6 }
  };
  const colors = [
    "#F75C2F",
    "#FC9F4D",
    "#DB4D6D",
    "#FEDFE1",
    "#947A6D",
    "#E98B2A"
  ];
  const margins = [0, 20, 20, 60, 60, -20, -20, -60, -60];
  const delays = [1200, 2000, 1600];
  const floatTimes = [2, 2.2, 2.4];
  const sizes = [220, 140, 90, 70, 50];
  const randomReturn = args => args[Math.floor(Math.random() * args.length)];
  const handleHover = () => console.log("hover");
  // func for passing down the dim animation prop to random bubbles
  return (
    <Grid>
      {Object.keys(channels).map((channel, i) => (
        <Bubble
          animations={animations}
          dimDelay={randomReturn(delays)}
          floatTime={randomReturn(floatTimes)}
          size={randomReturn(sizes)}
          marginTop={randomReturn(margins)}
          marginRight={randomReturn(margins)}
          handleHover={handleHover}
          handleClick={() => bubbleClick(channel)}
          text={channel}
          color={randomReturn(colors)}
          position={grid[i]}
        />
      ))}
    </Grid>
  );
};

export default Container;
