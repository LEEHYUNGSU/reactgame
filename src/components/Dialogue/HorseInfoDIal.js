import { useEffect } from "react";

function HorseInfoDial({horseEventNumber, setHorseSelectOn, setHorseEventNumber, horseSelectOn}){
  const HorseEventEnter = (event) => {
   if(event.key === 'Enter' && !horseSelectOn){
    setHorseSelectOn(true);
    setHorseEventNumber((prev) => prev + 1);
   }
  }


  useEffect(() => {
    document.addEventListener('keydown', HorseEventEnter);
    return() => document.removeEventListener('keydown', HorseEventEnter);
  }, [horseSelectOn]);

  return(
    <div className="Horse__select__info">
      제{horseEventNumber}회 경마를 시작합니다.
      각각의 경주마들의 특징 및 배당률은 다음과 같습니다.

      엔터를 누르면 선택할 수 있습니다.
    </div>
  )
}

export default HorseInfoDial;