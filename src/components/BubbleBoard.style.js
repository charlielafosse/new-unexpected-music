import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1px;
  height: 100vh;
  width: 100vwh;
  margin: 0 auto;
  box-sizing: border-box;
`;
