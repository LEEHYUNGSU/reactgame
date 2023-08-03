import AnimalImg from '../../images/animal/animal.png';
import AnimalSprite from './Sprite';
import { useState, useEffect } from 'react';


const Animal5 = ({aniRunStart, setArriveHorse, arriveHorse, xAniNum}) => {
  const [animalLeft, setAnimalLeft] = useState(-260);
  const [counter, setCounter] = useState(0);
  const [ani2Ability, setAni2Ability] = useState(true);


  useEffect(() => {
    let animalValid;
  
    const AniRunEffect = () => {
      if (animalLeft > 1200) {
        console.log("chicken arrive");
        setArriveHorse((prev) => [...prev, 4]);
        return;
      }
  
      animalValid = setInterval(() => {
        if (Math.random() < 0.05 && !ani2Ability) {
          setAnimalLeft(700);
          setAni2Ability(true);
          console.log('ani2_ability');
        } else {
          const randomIncrement = Math.floor(Math.random() * 19 * xAniNum[4]) + 10;
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




  const [anibackpos, setAnibackPos] = useState('-365px -130px');
  const [anibackposX, setAnibackPosX] = useState(-365);
  const [anibackposY, setAnibackPosY] = useState(-130);


  return(
    <div className="animal-container" style={{display: "inline-block", position: "relative", top: "540px", left: `${animalLeft}px`, width: "32px", height: "32px", }}>
      <AnimalSprite height={64} width={64} spriteUrl={AnimalImg} anibackposX={anibackposX} anibackposY={anibackposY} />
    </div>
  )
}

export default Animal5;