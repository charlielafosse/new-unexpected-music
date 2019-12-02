import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1px;
  // width: calc(100vmin - 32px);
  // height: calc(100vmin - 32px);
  // width: 100vwh;
  // height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;
