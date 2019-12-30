import styled from "styled-components";

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
  /* justify-content: center; */
  align-items: center;
`;

export const Help = styled.button`
  float: right;
  margin-right: 2%;
  color: #fad7a0;
  background-color: #0b1013;
  border: 0px;
  margin-top: 2%;
  font-size: 1.4rem;
  cursor: pointer;
  outline: none;
`;

export const Menu = styled.div`
  float: right;
  color: #fad7a0;
  margin-top: 6%;
  opacity: ${props => (props.show ? 0.5 : 0)};
  padding: 18px 16px;
  transition: opacity 0.5s;
  font-size: 12px;
  border-radius: 2%;
  max-width: 8%;
`;
