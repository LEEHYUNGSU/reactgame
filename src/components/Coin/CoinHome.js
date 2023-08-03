import { useEffect, useState } from "react";
import CoinPage from "./CoinPage";

function CoinHome({ hadCoin, setHadCoin, initialPriceArray, stockPriceArray, setStockPriceArray, colorArray, setColorArray, setCoinPage, setMapPage, coinPage, hadMoney, setHadMoney, ddukNum, xStockNum, basicStockNum, stockSellNum, cantDelete }) {
  const [coinToStart, setCoinToStart] = useState(false);

  const CoinStartEnter = (event) => {
    if(event.key === 'Enter' && !coinToStart){
      setCoinToStart(true);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', CoinStartEnter);
    return() => document.removeEventListener('keydown', CoinStartEnter);
  });

  const CoinExitESCEnter = (event) => {
    if(event.key === 'Escape' && !coinToStart && coinPage){
      setCoinPage(false);
      setMapPage(true);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', CoinExitESCEnter);
    return () => document.removeEventListener('keydown', CoinExitESCEnter);
  });


  return (
    <>
      {!coinToStart? 
        <>
        <div className="coin__home__container">
        <div className="coin__home__info">
          당신이 현재 보유중인 코인의 수는 다음과 같습니다.
          <div className="coin__home__number__info">
            1번 코인: {hadCoin[0]}개
          </div>
          <div className="coin__home__number__info">
          2번 코인: {hadCoin[1]}개
          </div>
          <div className="coin__home__number__info">
          3번 코인: {hadCoin[2]}개
          </div>
          <div className="coin__home__number__info">
          4번 코인: {hadCoin[3]}개
          </div>
          <div className="coin__home__number__info">
          5번 코인: {hadCoin[4]}개
          </div> 
        </div>

        <div className="coin__home__had__money">
          당신이 현재 보유중인 소지금은 {hadMoney}원입니다.
        </div>

        <div className="coin__home__enter">
          엔터키를 입력하면 코인 가격 변동 페이지로 넘어가게 됩니다.
          ESC키를 입력하면 원래의 화면으로 돌아갑니다.
        </div>
      </div>
    </>
    : null
      }

      {coinToStart ? <CoinPage hadCoin={hadCoin} initialPriceArray={initialPriceArray} stockPriceArray={stockPriceArray} colorArray={colorArray} setStockPriceArray={setStockPriceArray} setColorArray={setColorArray} coinToStart={coinToStart} setCoinToStart={setCoinToStart} setHadCoin={setHadCoin} setHadMoney={setHadMoney} hadMoney={hadMoney} ddukNum={ddukNum} xStockNum={xStockNum} basicStockNum={basicStockNum} stockSellNum={stockSellNum} cantDelete={cantDelete} /> : null}
     
    </>
  );
}

export default CoinHome;
