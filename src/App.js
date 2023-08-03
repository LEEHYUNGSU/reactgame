import './App.css';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import Map from './components/Map';
import { Maps } from './config/Maps';
import { createMapData, getPlayerPosition, getStartPosition } from './@core/utils/mapUtils';
import Character from './components/Character';
import { BlackScreen } from './components/Map/BlackScreen';
import { useState } from 'react';
import Animal from './components/Animal';
import Animal2 from './components/Animal/Animal2';
import Dialogue from './components/Dialogue/Dialouge';
import { OpacityScreen } from './components/Map/OpacityScreen';
import Door from './components/Map/MapObject/Door';
import Animal3 from './components/Animal/Animal3';
import Animal4 from './components/Animal/Animal4';
import Animal5 from './components/Animal/Animal5';
import Start from './components/Start/Start';
import Status from './components/Status/Status';
import Sound from '../src/components/Sound/Sound';
import CoinPage from './components/Coin/CoinPage';
import QuizPage from './components/Quiz/QuizPage';
import CoinHome from './components/Coin/CoinHome';
import LoadingBack from './components/Loading/LoadingBack';







const PositionRacing = {x: 50, y: 770};

const PositionTown = {x: 1200, y: 900};

// 상대 위치가 x 50, y 770이면 다음 넘어갔을 때 움직일 수 있다.


function App() {
  const mapRef = useRef(null);
  // 맵의 참조 ref값

  const charRef = useRef(null);

  // 캐릭터 스프라이트 및 캐릭터 컨테이너의 참조 ref 값
  const [startPos, setStartPos] = useState({x:250, y:300});
  // 초기 스타트 맵의 포지션 값. 포지션 값은 캐릭터의 기본 pos값인 x와 y가 0인 상태에서 startPos를 더해서 결정되며, 이것이 캐릭터의 초기 xPosition, yPosition 값으로 결정된다. 캐릭터가 움직일 때 마다 바뀌는 것은 pos값이며, startPos는 각 맵 마다 다른 초기 위치를 세팅하기 위해서 설정되어 있는 상태값이다.

  const [openSettings, setOpenSettings] = useState(true);
  // 초기 플로우를 위해서 지정해놓은 상태값, openSettings가 끝이나면, 맵 값이 표현되게 된다.

  const [selectedChar, setSelectedChar] = useState('char-1');

  // 초기캐릭터를 지정하기 위한 상태값. 초기 캐릭터의 스프라이트를 지정하였다. 캐릭터의 스프라이트를 바꾸기 위해서는 이 값을 바꾸어야 한다.
  const [selectedMap, setSelectedMap] = useState('map-3');

  // 초기 맵 값을 지정해놓은 상태값. 이 상태값이 변하면 맵이 바뀌게 된다.
  const [mapData, setMapData] = useState(createMapData(Maps[selectedMap].data, Maps[selectedMap].pathLayerName));

  // mapData는 selectedMap을 통하여 변하게 된다. 맵이 이동하면 selectedMap이 바뀌게 되고, mapData가 바뀌게 된다.
  const [mapMove, setMapMove] = useState(false);
  // map을 이동할 때의 상태값. mapMove가 true일 때, 로딩값을 보여주는 것 같다.


  // const [oneAni, setOneAni] = useState(false);
  const [aniRunStart, setAniRunStart] = useState(false);
  // 경마가 시작되면 aniRunStart가 true로 활성화된다.

  const [opaScreen, setOpaScreen] = useState(false);
  // 로딩화면일시 opaScreen이 변화하면 opaScreen이 활성화된다. 또한 dialLogue를 화면에 띄울시에 다른 배경화면을 opaScreen으로 조정하는 것 같다.

  const [dialogue, setDialogue] = useState(false);

  // 다이알로그를 표현할 때 활성화 되는 상태값.
  const [dialMessage, setDialMessage] = useState(null);
  // dialLogue 메시지를 지정해줄 때 다음 dialMessage를 결정하는 상태값.

  const [startPage, setStartPage] = useState(true);
  // stratPage가 활성화되면, 맵이 표시되지 않는다.

  const [statusPage, setStatusPage] = useState(false);
  // 만약 esc를 눌러서 캐릭터 스테이터스페이지를 활성화시키면 스테이터스 페이지가 전체 맵을 뒤덮어서, 그것만 보여지게 한다. 그 때 이용하는 상태값이다.

  const [isPlaying, setIsPlaying] = useState(false);


  // 사운드가 재생되고 있을 때, 배경 음악이 재생되고 있을 때 사용하는 상태값.
  const [hadMoney, setHadMoney] = useState(316000);
  // 현재 사용자가 가지고 있는 돈을 표현하는 상태값.

  const [selectedHorse, setSelectedHorse] = useState(false);

  // 사용자가 경마에서 특정 동물을 선택할 시에 활성화되는 상태값.
  const [arriveHorse, setArriveHorse] = useState([]);
  // 동물들을 도착하는 순서대로 나열하는 상태값이자 배열

  const [pos, setPos] = useState({x: 0, y:0});



  const [mapPage, setMapPage] = useState(true);



  const [coinPage, setCoinPage] = useState(false);

  // 코인페이지를 활성화시키는 변수
  const [quizPage, setQuizPage] = useState(false);

  // 퀴즈페이지를 활성화시키는 변수


  const [hadCoin, setHadCoin] = useState([0, 0, 1, 0, 0]);

  // 사용자가 보유한 코인에 대한 배열 및 변수

  const initialPriceArray = [10000, 30000, 50000, 100000, 200000];

  // 각 코인에 대응하는 초기가격 변수(상태가 아니다).
  const [stockPriceArray, setStockPriceArray] = useState(initialPriceArray);

  // 각 코인의 가격을 설정하는 상태 변수
  const [colorArray, setColorArray] = useState(['', '', '', '', '']);
  
  // 각 코인을 나타내는 색깔 디자인 상태 변수

  const [mapMove2, setMapMove2] = useState(false);

  const [horseEventNumber, setHorseEventNumber] = useState(1);

  const [aniPage, setAniPage] = useState(false);

  const [loadingFlow, setLoadingFlow] = useState(false);

  const [charNumber, setCharNumber] = useState(0);

  const [loadingBack, setLoadingBack] = useState(false);


  // 캐릭터의 특수능력에 대한 상태

  const [xStockNum, setXStockNum] = useState([1, 1, 1, 1, 1]);
  // 코인의 가격 상승 변동계수

  const [xAniNum, setXAniNum] = useState([1, 1, 1, 1, 1]);

  // 동물들의 속도계수

  const [stockSellNum, setStockSellNum] = useState(1);

  // 코인을 판매할 때 돌려받는 금액 계수

  const [ddukNum, setDDukNum] = useState([1, 1]);

  // 떡상확률 변수: 배열의 0번 인덱스가 떡상 확률 계수이며, 배열의 1번 인덱스가 떡락 확률 계수이다.

  const [runFromDestock, setRunFromDestock] = useState(false);

  // 상장폐지 시 보유코인을 잃지 않게 하는 변수

  const [ableMove, setAbleMove] = useState(true);

  // 캐릭터가 걷지 못하게 설정하는 스위치 변수

  const [basicStockNum, setBasicStockNum] = useState([0.05, 0.1, 0.15, 0.2, 0.25]);

  const [betMoney, setBetMoney] = useState(0);

  // 동물배팅 금액 변수

  const [cantDelete, setCantDelete] = useState(false);

  const [endingFlow, setEndingFlow] = useState(false);

  const endingMoney = 40000000;

  const loseMoney = 3000;


  // 엔딩홣성화에 대한 유즈이펙트

  useEffect(() => {
    if(hadMoney > endingMoney || hadMoney < loseMoney){
      setEndingFlow(true);
    }
  }, [hadMoney]);




  // 캐릭터의 특수능력에 대한 세팅 유즈이펙트.


  useEffect(() => {
    if(selectedChar === 'char-1'){
      setXStockNum((prev) => {
        const newXStockNum = [...prev];
        newXStockNum[2] = 1.2;
        return newXStockNum;
      })
    }else if(selectedChar === 'char-2'){
      setXStockNum((prev) => {
        const newXStockNum = [...prev];
        newXStockNum[3] = 1.2;
        return newXStockNum;
      })
    }else if(selectedChar === 'char-3'){
      setXAniNum((prev) => {
        const newXAniNum = [...prev];
        newXAniNum[1] = 1.2;
        return newXAniNum;
      })
    }else if(selectedChar === 'char-4'){
      setXAniNum((prev) => {
        const newXAniNum = [...prev];
        newXAniNum[0] = 1.2;
        return newXAniNum;
      })
    }else if(selectedChar === 'char-5'){
      setXStockNum((prev) => {
        const newXStockNum = [...prev];
        newXStockNum[1] = 1.2;
        return newXStockNum;
      })
    }else if(selectedChar === 'char-6'){
      setXAniNum((prev) => {
        const newXAniNum = [...prev];
        newXAniNum[3] = 1.2;
        return newXAniNum;
      })
    }else if(selectedChar === 'char-7'){
      setXAniNum((prev) => {
        const newXAniNum = [...prev];
        newXAniNum[4] = 1.2;
        return newXAniNum;
      })
    }else if(selectedChar === 'char-8'){
      setStockSellNum(1.2);
    }else if(selectedChar === 'char-9'){
      setDDukNum((prev) => {
        const newDDukNum = [...prev];
        newDDukNum[1] = 0.8;
        return newDDukNum;
      })
    }else if(selectedChar === 'char-10'){
      setHadCoin((prev) => {
        const newHadCoin = [...prev];
        newHadCoin[2] = 10;
        return newHadCoin;
      })
    }else if(selectedChar === 'char-11'){
      setDDukNum((prev) => {
        const newDDukNum = [...prev];
        newDDukNum[0] = 1.2;
        return newDDukNum;
      })
    }else if(selectedChar === 'char-12'){
      setCantDelete(true);
    }
  }, [selectedChar]);




  // 동물 도착 판단 대화로그 띄우는 이펙트



  useEffect(() => {
    if(arriveHorse.length === 5){
      // console.log(arriveHorse);
      setAniRunStart(false);
      setDialogue(true);
      if(arriveHorse[0] === selectedHorse){
        // console.log(hadMoney);
        setDialogue(true);
        setAniRunStart(false);
      }
      
    }
  }, [arriveHorse]);



  useEffect(() => {
    if(selectedMap === 'map-4'){
      const resetMapMove = () => {
        setMapMove(false);
        setSelectedMap('map-2');
        setAniPage(true);
        setStartPos(PositionRacing);
        setMapData(createMapData(Maps['map-2'].data, Maps['map-2'].pathLayerName));
        setDialogue(true);
        setDialMessage("경주를 진행하시겠습니까?");
      }
  

      if(mapMove){
        const timer = setTimeout(resetMapMove, 3000);
  
        return () => clearTimeout(timer);
      }
    }
  }, [mapMove]);


  useEffect(() => {
    if(selectedMap === 'map-3'){
      const resetMapMove = () => {
        setMapMove(false);
        setSelectedMap('map-4');
        setStartPos({x:32, y:800});
        setMapData(createMapData(Maps['map-4'].data, Maps['map-4'].pathLayerName));
      }
  
  
      if(mapMove){
        const timer = setTimeout(resetMapMove, 3000);
  
        return () => clearTimeout(timer);
      }  
    }
    
  }, [mapMove]);

  const AnimalRunExitEnter = (event) => {
    if(event.key === 'Enter' && arriveHorse.length === 5){
      setArriveHorse([]);
      setAniPage(false);
      setSelectedMap('map-4');
      setStartPos({x: 32, y: 800});
      setMapData(createMapData(Maps['map-4'].data, Maps['map-4'].pathLayerName)); 
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', AnimalRunExitEnter);
    return() => document.removeEventListener('keydown', AnimalRunExitEnter);
  }, [arriveHorse]);

  



  return(
    <>
    <Sound startPage={startPage} isPlaying={isPlaying} setIsPlaying={setIsPlaying} mapPage={mapPage} selectedMap={selectedMap} />
    {loadingBack ? <LoadingBack loadingBack={loadingBack} setLoadingBack={setLoadingBack} /> : null}
    {startPage || endingFlow ? <Start setStartPage={setStartPage} startPage={startPage} loadingFlow={loadingFlow} setLoadingFlow={setLoadingFlow} selectedChar={selectedChar} setSelectedChar={setSelectedChar} charNumber={charNumber} setCharNumber={setCharNumber} loadingBack={loadingBack} setLoadingBack={setLoadingBack} endingFlow={endingFlow} hadMoney={hadMoney} endingMoney={endingMoney} loseMoney={loseMoney} /> : null}

    {!mapPage && quizPage ? <QuizPage mapPage={mapPage} setMapPage={setMapPage} setHadMoney={setHadMoney} quizPage={quizPage} setQuizPage={setQuizPage} /> : null}

    {!mapPage && coinPage ? <CoinHome hadCoin={hadCoin} setHadCoin={setHadCoin}  initialPriceArray = {initialPriceArray} stockPriceArray={stockPriceArray} setStockPriceArray={setStockPriceArray} ddukNum={ddukNum}
  colorArray={colorArray} setColorArray={setColorArray} setCoinPage={setCoinPage} setMapPage={setMapPage} coinPage={coinPage} hadMoney={hadMoney} setHadMoney={setHadMoney} xStockNum={xStockNum} basicStockNum={basicStockNum} stockSellNum={stockSellNum} cantDelete={cantDelete}  /> : null}


      

        
        {mapMove ? <BlackScreen/> : null}
          

        {statusPage ? <Status setStatusPage={setStatusPage} hadMoney={hadMoney} selectedChar={selectedChar} setSelectedChar={setSelectedChar} hadCoin={hadCoin} stockPriceArray={stockPriceArray} ableMove={ableMove} setAbleMove={setAbleMove} statusPage={statusPage} /> : null}
          {!startPage && mapPage ?
          <>
                <div className='App' style={{display: statusPage ? 'none' : 'flex'}}>
                <div className='Game'>
                 <Map ref={mapRef}  mapImage={Maps[selectedMap].image} sizeX={Maps[selectedMap].sizeX} sizeY={Maps[selectedMap].sizeY} mapMove={mapMove} setStatusPage={setStatusPage} statusPage={statusPage} pos={pos} selectedMap={selectedMap}>

                 {/* {selectedMap === 'map-3' ? <Door /> : null} */}


                 {opaScreen ? <OpacityScreen /> : null}


                   <Character ref={charRef} startPos={startPos} 
                   char={selectedChar} data={{mapRef, setOpenSettings}}
                   pathLayerData={mapData} mapMove={mapMove} setMapMove={setMapMove}
                   pos={pos} setPos={setPos} selectedMap={selectedMap} setMapPage={setMapPage} setQuizPage={setQuizPage} setCoinPage={setCoinPage} ableMove={ableMove} setAbleMove={setAbleMove}
                   />
       
       
                 {(selectedMap === 'map-2') ? <Animal aniRunStart={aniRunStart} setArriveHorse={setArriveHorse} arriveHorse={arriveHorse} xAniNum={xAniNum} /> : null}
                 {(selectedMap === 'map-2') ? <Animal2 aniRunStart={aniRunStart} setArriveHorse={setArriveHorse} arriveHorse={arriveHorse} xAniNum={xAniNum} /> : null}
                 {(selectedMap === 'map-2') ? <Animal3 aniRunStart={aniRunStart} setArriveHorse={setArriveHorse} arriveHorse={arriveHorse} xAniNum={xAniNum} /> : null}
                 {(selectedMap === 'map-2') ? <Animal4 aniRunStart={aniRunStart} setArriveHorse={setArriveHorse} arriveHorse={arriveHorse} xAniNum={xAniNum} /> : null}
                 {(selectedMap === 'map-2') ? <Animal5 aniRunStart={aniRunStart} setArriveHorse={setArriveHorse} arriveHorse={arriveHorse} xAniNum={xAniNum} /> : null}
       
                 {dialogue && !aniRunStart && aniPage ? <Dialogue dialogue={dialogue} dialMessage={dialMessage} setDialogue={setDialogue} setAniRunStart={setAniRunStart} selectedHorse={selectedHorse} setSelectedHorse={setSelectedHorse} horseEventNumber={horseEventNumber} setHorseEventNumber={setHorseEventNumber} arriveHorse={arriveHorse} aniPage={aniPage} setAniPage={setAniPage} hadMoney={hadMoney} setHadMoney={setHadMoney} betMoney={betMoney} setBetMoney={setBetMoney} setArriveHorse={setArriveHorse} /> : null}
       
                 </Map>
                 </div>
                </div>
                </>
                  : null
          }

          
    </>

  )
}

export default App;
