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
          const randomIncrement = Math.floor(Math.random() * 19.5 * xAniNum[0]) + 10;
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


 



  const [anibackposX, setAnibackPosX] = useState(0);
  const [anibackposY, setAnibackPosY] = useState(-130);

  return(
    <div className="animal-container" style={{display: "inline-block", position: "relative", top: "180px", left: `${animalLeft}px`, width: "64px", height: "64px", }}>
      <AnimalSprite height={64} width={64} spriteUrl={AnimalImg} anibackposX={anibackposX} anibackposY={anibackposY} />
    </div>
  )
}


export default Animal;