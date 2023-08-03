import './anisprite.css';
import { styled, keyframes } from 'styled-components';

function AnimalSprite({height, width, spriteUrl, anibackposX, anibackposY}) {
 
  const walkAnimation = keyframes`
  from {
    /* background-position: 0 -130px; */
    background-position-x: ${anibackposX}px;
    background-position-y: ${anibackposY}px;
  }
  to {
    /* background-position: -120px -130px; */
    background-position-x:  ${anibackposX - 120}px;
    background-position-y: ${anibackposY}px;
    
  }
`;

const AnimalSpriteDiv = styled.div`
  animation: ${walkAnimation} 0.3s steps(2) infinite;
  height: ${height}px;
  width: ${width}px;
  background-image: url(${spriteUrl});
  background-repeat: no-repeat;
  background-size: 1150% 800%;
`;

  return(
    <>
    {/* <div
    id="animal-sprite"
    style={{
      height: `${height}px`,
      width: `${width}px`,
      backgroundImage: `url('${spriteUrl}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: anibackpos,
      backgroundSize: '1150% 800%',
      animation: 
    }}
  /> */}
  <AnimalSpriteDiv />

  </>
  )
}

export default AnimalSprite;

