import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Metrophobic&display=swap");
  margin: 0;
  background-color: ${props => props.color};
  font-family: "Metrophobic", sans-serif;
  font-weight: 300;
`;
