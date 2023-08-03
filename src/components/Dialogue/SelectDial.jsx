import { useEffect, useState } from "react";

function SelectDial({id, name, horseArrSelected, setHorseArrSelected, setSelectedHorse, setDialogue, setAniRunStart, selectedHorse, hadMoney, setHadMoney, betMoney, setBetMoney, index, setArriveHorse, horseSelectOn, bettingSelect, setBettingSelect}){


  const handleBetBtn = () => {
    if (betMoney !== 0 && Number(betMoney) > 0 && betMoney <= hadMoney) {
      setHadMoney((prev) => prev - betMoney);
      setSelectedHorse(horseArrSelected);
      setDialogue(false);
      setAniRunStart(true);
    }else {
      alert('소지금을 초과하거나 입력되어 있지 않습니다.');
    }
  };


  const handleBuyInputChange = (event) => {
    setBetMoney(event.target.value);
  };



  const SelectDialDown = (event) => {
    if(event.key === 'ArrowDown'){
      setHorseArrSelected((prev) => (prev !== 4) ? (prev + 1) : 0);
    }
  }

  

  useEffect(() => {
    document.addEventListener('keydown', SelectDialDown);
    return() => {
      document.removeEventListener('keydown', SelectDialDown);
    }
  }, [horseArrSelected]);

  const SelectRaceEnter = (event) => {
    if(event.key === 'Enter' && !bettingSelect && horseSelectOn){
     setBettingSelect(true);
     setArriveHorse([]);
    }
  };

  useEffect(()=>{
    document.addEventListener('keydown', SelectRaceEnter);
    return() => {
      document.removeEventListener('keydown', SelectRaceEnter);
    }
  })



  return(
    <>
    {!bettingSelect ? <div className={id === horseArrSelected ? 'select__dial' : 'select__dial__selected'}>
      {name}
    </div> : null }
    
    {bettingSelect && index === horseArrSelected ? <>  <input className="animal__bet__money" type="number"
        value={betMoney}
        onChange={handleBuyInputChange}
        placeholder="배팅 금액을 입력하세요"
    />
    <button onClick={handleBetBtn} className='coinbuy__button1'>배팅하기</button>
    </>
 : null}
  
   
    </>
  )
}

export default SelectDial;

