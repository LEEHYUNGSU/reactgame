import AnimalImg from '../../images/animal/animal.png';
import AnimalSprite from './Sprite';
import { useState, useEffect } from 'react';


const Animal4 = ({aniRunStart, setArriveHorse, arriveHorse, xAniNum}) => {
  const [animalLeft, setAnimalLeft] = useState(-190);
  const [counter, setCounter] = useState(0);
  const [ani2Ability, setAni2Ability] = useState(true);


  useEffect(() => {
    let animalValid;
  
    const AniRunEffect = () => {
      if (animalLeft > 1270) {
        console.log("horse arrive");
        setArriveHorse((prev) => [...prev, 3]);
        return;
      }
  
      animalValid = setInterval(() => {
        if (Math.random() < 0.05 && !ani2Ability) {
          setAnimalLeft(700);
          setAni2Ability(true);
          console.log('ani2_ability');
        } else {
          const randomIncrement = Math.floor(Math.random() * 20 * xAniNum[3]) + 10;
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




  const [anibackpos, setAnibackPos] = useState('-182px -385px');
  const [anibackposX, setAnibackPosX] = useState(-185);
  const [anibackposY, setAnibackPosY] = useState(-385);


  return(
    <div className="animal-container" style={{display: "inline-block", position: "relative", top: "470px", left: `${animalLeft}px`, width: "60px", height: "62px", overflow: 'hidden' }}>
      <AnimalSprite height={64} width={64} spriteUrl={AnimalImg} anibackposX={anibackposX} anibackposY={anibackposY} />
    </div>
  )
}

export default Animal4;