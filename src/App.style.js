import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Comfortaa|Poiret+One&display=swap");
  margin: 0;
  background-color: ${props => props.color};
  font-family: "Comfortaa", cursive;
  font-weight: 300;
  /* // height: 100vh; */
  /* width: 140vw; */
`;
