import { useState, useEffect } from "react";
import charimg from '../../images/person/characterimage2.png';
import charimg2 from '../../images/person/characterImg3.png';
import SelectDial from "./SelectDial";
import HorseInfoDial from "./HorseInfoDIal";


const Dialogue = ({dialogue, dialMessage, setDialogue, setAniRunStart, selectedHorse, setSelectedHorse, horseEventNumber, setHorseEventNumber, arriveHorse, aniPage, setAniPage, hadMoney, setHadMoney, betMoney, setBetMoney, setArriveHorse}) => {
  const [horseArrSelected, setHorseArrSelected] = useState(0);
  const [bettingSelect, setBettingSelect] = useState(false);


  const [horseSelectOn, setHorseSelectOn] = useState(false);

  const horseNameArr = ['윈디', '밀탱크', '냐옹', '날쌩마', '파오리'];


  useEffect(() => {
    if(arriveHorse.length === 5){
      alert(`경주 결과는 다음과 같습니다 1위 : ${horseNameArr[arriveHorse[0]]} 2위 : ${horseNameArr[arriveHorse[1]]} 3위 : ${horseNameArr[arriveHorse[2]]} 4위 : ${horseNameArr[arriveHorse[3]]} 5위 : ${horseNameArr[arriveHorse[4]]}
      엔터를 누르면 마을로 돌아갑니다.
      `,);
      setAniPage(false);
    }
  }, [arriveHorse, horseArrSelected, bettingSelect]);

  useEffect(() => {
    if(arriveHorse[0] === selectedHorse){
      setHadMoney((prev) => prev + betMoney * 4);
      setBetMoney(0);
      setSelectedHorse(false);
    }
  }, [arriveHorse]);

  useEffect(() => {
    console.log(`arriveHorse: ${arriveHorse}`);
  }, []);



  const horseArray = [
    {
      id: 0,
      name: '강아지'
    },
    {
      id: 1,
      name: '소'
    },
    {
      id: 2,
      name: '고양이'
    },{
      id: 3,
      name: '말'
    },
    {
      id: 4,
      name: '닭'
    }
  ];



  // const DialogueClick = () => {
  //   setDialogue(false);
  //   setAniRunStart(true);
  // }


  return(
    <>
    <div className="dialogue__overlay" style={{width: '1600px', height: "800px", backgroundColor: 'black', position: 'absolute', zIndex: '900', left: '0', top: '0', opacity: 0.3}} />
    <div className="dialogue__container" tabIndex={0} >
      <div className="dialogue__image" style={{ height: '100%', flex: '0 0 15%', }}>
        <div className="diaimg" style={{width: "200px", height: "200px", backgroundImage: `url(${charimg2})`, backgroundPosition: "0 0", zIndex: 1003, objectFit: 'cover', backgroundSize: "1200% 800%", opacity: '1.2'   }}>
          
        </div>
      </div>


      <div className="dialogue__content" style={{height: '100%', flex: '0 0 85%', opacity: 0.9}} >
        {!horseSelectOn ? <HorseInfoDial setHorseSelectOn={setHorseSelectOn} horseEventNumber={horseEventNumber} setHorseEventNumber={setHorseEventNumber} horseSelectOn={horseSelectOn} /> : null}

        {horseSelectOn? horseArray.map((horse, index) => (
          <SelectDial id={horse.id} key={horse.id} name={horse.name} horseArrSelected={horseArrSelected} setHorseArrSelected={setHorseArrSelected} selectedHorse={selectedHorse} setSelectedHorse={setSelectedHorse} setDialogue={setDialogue} setAniRunStart={setAniRunStart} hadMoney={hadMoney} setHadMoney={setHadMoney} betMoney={betMoney} setBetMoney={setBetMoney} index={index} setArriveHorse={setArriveHorse} horseSelectOn={horseSelectOn} bettingSelect={bettingSelect} setBettingSelect={setBettingSelect}  />
        )) : null}
        
 
      </div>

    </div>
    </>
  )
}


export default Dialogue;