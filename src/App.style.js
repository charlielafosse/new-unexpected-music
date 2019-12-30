import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Metrophobic&display=swap");
  margin: 0;
  background-color: ${props => props.color};
  font-family: "Metrophobic", sans-serif;
  font-weight: 300;
  width: 100%;
`;

export const Splash = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
