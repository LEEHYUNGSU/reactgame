import AnimalImg from '../../images/animal/animal.png';
import AnimalSprite from './Sprite';
import { useState, useEffect } from 'react';


const Animal2 = ({aniRunStart, setArriveHorse, arriveHorse, xAniNum}) => {
  const [animalLeft, setAnimalLeft] = useState(-70);
  const [counter, setCounter] = useState(0);
  const [ani2Ability, setAni2Ability] = useState(true);

  useEffect(() => {
    let animalValid;
  
    const AniRunEffect = () => {
      if (animalLeft > 1390) {
        console.log("cow arrive");
        setArriveHorse((prev) => [...prev, 1]);
        return;
      }
  
      animalValid = setInterval(() => {
        if (Math.random() < 0.05 && !ani2Ability) {
          setAnimalLeft(700);
          setAni2Ability(true);
          console.log('ani2_ability');
        } else {
          const randomIncrement = Math.floor(Math.random() * 18.95 * xAniNum[1]) + 10;
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




  const [anibackpos, setAnibackPos] = useState('5px -385px');

  const [anibackposX, setAnibackPosX] = useState(0);
  const [anibackposY, setAnibackPosY] = useState(-385);


  return(
    <div className="animal-container" style={{display: "inline-block", position: "relative", top: "280px", left: `${animalLeft}px`, width: "60px", height: "64px", overflow: "hidden" }}>
      <AnimalSprite height={64} width={64} spriteUrl={AnimalImg} anibackposX={anibackposX} anibackposY={anibackposY} />
    </div>
  )
}

export default Animal2;