import CharSelect from "./CharSelect";
import LoadingFlow from "./LoadingFlow";
import StartBtn from "./StartBtn";
import { useState, useEffect, useRef } from "react";
// import Sound from "../Sound/Sound";


function Start({setStartPage, startPage, loadingFlow, setLoadingFlow, selectedChar, setSelectedChar, charNumber, setCharNumber, loadingBack, setLoadingBack, endingFlow, endingMoney, hadMoney, loseMoney}){
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [startBtnClick, setStartBtnClick] = useState(false);
  const [charPage, setCharPage] = useState(false);
  const [textToShow, setTextToShow] = useState([
    "때는 2023년 4월...",
    "",
    "코드포테이토로 향한 초대장이 날아왔다...",
    "",
    "코드포테이토에 합류하여 자신의 가치를 증명하라...",
    "",
    "우리는 코드포테이토 아일랜드에 도착하게 되었다...",
    "",
    "",
  ]);

  useEffect(() => {
    if(endingFlow && (hadMoney > endingMoney)){
      setTextToShow([
        '2023년 10월...',
        '',
        '우리는 코드포테이토를 무사히 탈출했다...',
        '',
        '정말 엄청난 시간들이었어...',
        '',
        '인생에 다시 그렇게 열심히 하는 시간들은 없을테지',
        '',
        '난 이제 훌륭한 개발자로서 재탄생한거야!',
        ',',
        '끝',
      ])
    }else if(endingFlow && (hadMoney < loseMoney)){
      setTextToShow([
        '아',
        '',
        '코드포테이토에서의 시간이 모두 다 꿈이었다니...',
        '',
        '우린 이제 다시 무엇을 하면서 지내야하지?',
        '',
        '끝',
      ])
    }
  }, [endingFlow, hadMoney, endingMoney]);
  

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setSelectedBtn((prevSelectedBtn) => (prevSelectedBtn + 1) % startContents.length);
    }
  };

  // 이벤트 리스너 등록
    useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  const startContents = [
    {
      id: 0,
      content: 'Start',
    },{
      id: 1,
      content: 'Load',
    },{
      id: 2,
      content: 'End'
    }
  ];



  const StartBtnEnter = (event) => {
    if(event.key === 'Enter' && selectedBtn === 0 && !startBtnClick){
      setStartBtnClick(true);
      setLoadingBack(true);
      setLoadingFlow(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', StartBtnEnter);
    return() => {
      document.removeEventListener('keydown', StartBtnEnter);
    };
  }, [startBtnClick]);


  return(
    <>
    {charPage ?  <CharSelect charPage={charPage} setCharPage={setCharPage} startPage={startPage} setStartPage={setStartPage} selectedChar={selectedChar} setSelectedChar={setSelectedChar} charNumber={charNumber} setCharNumber={setCharNumber} /> : null }
    {(loadingFlow && !loadingBack) || (endingFlow) ? <LoadingFlow setLoadingFlow={setLoadingFlow} loadingFlow={loadingFlow} setCharPage={setCharPage} charPage={charPage} textToShow={textToShow} setTextToShow={setTextToShow} hadMoney={hadMoney} endingMoney={endingMoney} /> : null }
   
    <div className="start__container" style={{display: charPage || loadingFlow || endingFlow ? 'none' : 'flex'}}>
      {/* <Sound /> */}

    <div className="start__text">
      김코딩의 코드포테이토 탈출기
    </div>
    <div className="start__background">
      <div className="start__button__container">
      {startContents.map((data) => (
        <StartBtn content={data.content} key={data.id} selectedBtn={selectedBtn} id={data.id} />
      ))}
      </div>
    </div>
  </div>
  </>
  );
};

export default Start;