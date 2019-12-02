import styled, { css, keyframes } from "styled-components";

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-8px);
	}
	100% {
		transform: translatey(0px);
    }
`;

const dim = keyframes`
0%   { opacity:1; }
50%  { opacity:0; }
100% { opacity:1; }
`;

const doubleAnimation = (dimDelay, floatTime) => css`
${dim} ${dimDelay /
  100}s ease-in-out infinite, ${float} ${floatTime}s ease-in-out infinite;
`;

export const BubbleDiv = styled.div`
  border-radius: 50%;
  // background-color: ${props => props.color};
  background-image: url("https://img.freepik.com/free-photo/linen-canvas-texture_1373-423.jpg?size=626&ext=jpg");
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  grid-column-start: ${props => props.position.x};
  grid-row-start: ${props => props.position.y};
  margin-top: ${props => props.marginTop}px;
  margin-right: ${props => props.marginRight}px;
  margin: 0 auto;
  cursor: pointer;
//   border: 1px solid ${props => props.color};
-webkit-transition: opacity 3s ease-in-out;
    -moz-transition: opacity 3s ease-in-out;
    -ms-transition: opacity 3s ease-in-out;
    -o-transition: opacity 3s ease-in-out;
  opacity: 1;
  -webkit-animation: ${props =>
    doubleAnimation(props.dimDelay, props.floatTime)};
}};
`;

export const BubbleOverlay = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  -webkit-box-shadow: inset 0px 0px 44px 0px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: inset 0px 0px 44px 0px rgba(0, 0, 0, 0.28);
  box-shadow: inset 0px 0px 44px 0px rgba(0, 0, 0, 0.28);
  z-index: 2;
  opacity: 0.6;
  background: radial-gradient(
    circle at 120px 120px,
    ${props => props.color},
    #000
  );
`;
