import styled from 'styled-components';
import keyframes from 'styled-components';

export const WalkAnimation = keyframes`
  from {
    /* background-position: 0 -130px; */
    background-position-x: ${props => props.anibackposX}px;
    background-position-y: ${props => props.anibackposY}px;
  }
  to {
    /* background-position: -120px -130px; */
    background-position-x:  ${props => props.anibackposX - 120}px;
    background-position-y: ${props => props.anibackposY}px;
  }
`;

export const AnimalSpriteDiv = styled.div`
  animation: ${WalkAnimation} 0.5s steps(2) infinite;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background-image: url(${props => props.spriteUrl});
  background-repeat: no-repeat;
  background-size: 1150% 800%;
  animation: ${WalkAnimation} 0.5s steps(2) infinite;
`;