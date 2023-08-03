import AnimalImg from '../../images/animal/animal.png';
import AnimalSprite from './Sprite';
import { useState, useEffect } from 'react';


const Animal = ({aniRunStart, setArriveHorse, arriveHorse, xAniNum}) => {
  // 각각의 동물들의 기본속도는 강아지: 빠름    / 소: 매우 느림   / 고양이: 느림      / 닭: 보통     /  말 : 매우 빠름
  // 각각의 동물들의 속도의 기본 계수에 관하여 : 말은 2 / 강아지는 1.75 / 닭은 1.5 / 고양이는 1.25 / 소는 1로 정한다.
  // 이 부분의 특수능력 조정이 어려우므로 각 동물들의 기본 속도 계수를 매우 유사하게 설정하도록 한다.
  // 날쌩마의 속도계수 2 / 윈디의 속도계수 1.95 / 파오리의 속도계수 1.9 / 냐옹의 속도 계수 1.85 / 밀탱크의 속도계수 1.8
  // 각 동물들의 특수능력은 지금 당장에 표현하기 어려우므로 제거한다.
  // 각각의 동물들의 속도계수와 관련된 특수능력을 가질 시에 기본 속도계수에 0.1을 더하도록 한다.
  // 각 동물들의 배당률은 총 20회의 결과로 계산하도록 한다.


  const [animalLeft, setAnimalLeft] = useState(0);
  const [counter, setCounter] = useState(0);
  const [ani2Ability, setAni2Ability] = useState(true);

 


  useEffect(() => {
    let animalValid;
  
    const AniRunEffect = () => {
      if (animalLeft > 1460) {
        setArriveHorse((prev) => [...prev, 0]);
        console.log("dog arrive");
        return;
      }
  
      animalValid = setInterval(() => {
        if (Math.random() < 0.05 && !ani2Ability) {
          setAnimalLeft(700);
          setAni2Ability(true);
          console.log('ani1_ability');
        } else {
          const randomIncrement = Math.floor(Math.random() * 190.5 * xAniNum[0]) + 10;
          setAnimalLeft((prev) => prev + randomIncrement);
          setCounter((prev) => prev + 1);
        }
      }, 300);
    };
  
    if (aniRunStart === true) {
      AniRunEffect();
    }
  
    return () => {
      clearInterval(animalValid);
    };
  }, [aniRunStart, animalLeft, ani2Ability]);


  // 이제 필요한 것은 이 animal-container의 위치를 지속적으로 조정해주어야 한다는 것이다. 이것을 위해서는 초기값인 top, left를 지속적으로 움직여보면 된다. 그렇다면 이것이 계속 움직이기 위해서는 setInterval을 아마 실행해야 할 것 같다. 



  // 좋다. 대략적인 동물을 움직이는 로직은 만들어냈다. 이것을 나중에 연습해보아야 할 것이다. 다음으로 우리가 해야 하는 것은... 이 동물들을 움직임을 제어할 때, 애니메이션처럼 실제로 걷는 것처럼 보여져야 한다는 것이다. 그것은 어떻게 움직여질 수 있겠는가? 스프라이트 이미지의 백그라운드를 계속 움직여내야 하며, 이것은 카운터랑 연동해야 하며, 또한 애니메이션을 만들어내야 한다. 예시는 아래와 같다. 일단 우리의 첫번째 프레임과 마지막 프레임을 설정해야 할 것이다.



  const [anibackposX, setAnibackPosX] = useState(0);
  const [anibackposY, setAnibackPosY] = useState(-130);

  return(
    <div className="animal-container" style={{display: "inline-block", position: "relative", top: "180px", left: `${animalLeft}px`, width: "64px", height: "64px", }}>
      <AnimalSprite height={64} width={64} spriteUrl={AnimalImg} anibackposX={anibackposX} anibackposY={anibackposY} />
    </div>
  )
}


export default Animal;