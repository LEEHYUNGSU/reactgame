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



// 이제 이것을 방향 설정에 따라 움직이는 애니메이션으로, 그리고 움직임을 표현하고, 오른쪽으로 계속 자동으로 움직이게 하며, 백그라운드이미지의 포지션(어느 부분을 보여주어야 하는가)을 설정해주어야 한다.


// 자 이제 함수를 생각해보자. AnimalSprite는 어저피 감싸져있기 때문에 위치의 이동에 영향을 미치지 않는 요소이다. 위치를 제어하기 위해서 필요한 것은 위쪽 상위 요소인 Animal을 움직여야 한다. 그것을 움직일 수 있는 방법을 생각해보자. 