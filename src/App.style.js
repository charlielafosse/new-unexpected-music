import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Play&display=swap");
  margin: 0;
  background-color: ${props => props.color};
  font-family: "Play", sans-serif;
  font-weight: 300;
  // height: 100vh;
  // width: 100vw;
`;
