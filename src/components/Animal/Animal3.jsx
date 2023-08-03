import AnimalImg from '../../images/animal/animal.png';
import AnimalSprite from './Sprite';
import { useState, useEffect } from 'react';


const Animal3 = ({aniRunStart, setArriveHorse, arriveHorse, xAniNum}) => {
  const [animalLeft, setAnimalLeft] = useState(-130);
  const [counter, setCounter] = useState(0);
  const [ani2Ability, setAni2Ability] = useState(true);


  useEffect(() => {
    let animalValid;
  
    const AniRunEffect = () => {
      if (animalLeft > 1330) {
        console.log("cat arrive");
        setArriveHorse((prev) => [...prev, 2]);
        return;
      }
  
      animalValid = setInterval(() => {
        if (Math.random() < 0.05 && !ani2Ability) {
          setAnimalLeft(700);
          setAni2Ability(true);
          console.log('ani2_ability');
        } else {
          const randomIncrement = Math.floor(Math.random() * 18.95 * xAniNum[2]) + 10;
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




  const [anibackpos, setAnibackPos] = useState('-180px -130px');
  const [anibackposX, setAnibackPosX] = useState(-190);
  const [anibackposY, setAnibackPosY] = useState(-130);


  return(
    <div className="animal-container" style={{display: "inline-block", position: "relative", top: "370px", left: `${animalLeft}px`, width: "58px", height: "64px", overflow: 'hidden' }}>
      <AnimalSprite height={64} width={64} spriteUrl={AnimalImg} anibackposX={anibackposX} anibackposY={anibackposY} />
    </div>
  )
}

export default Animal3;