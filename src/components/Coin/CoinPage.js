import React, { useState, useEffect } from 'react';
import ConfirmationDialog from './ConfirmationDialog';
import CoinBuy from './CoinBuy';
import codepotatoImg from '../../../src/images/stock/potato.png';
import codingWaffleImg from '../../../src/images/stock/codingwaffle.png';
import slowCampusImg from '../../../src/images/stock/slowcam.png';
import outRunImg from '../../../src/images/stock/outlearn.png';
import codeEatImg from '../../../src/images/stock/codeeat.png';


const CoinPage = ({hadCoin, setHadCoin, initialPriceArray, stockPriceArray, setStockPriceArray, colorArray, setColorArray, coinToStart, setCoinToStart, hadMoney, setHadMoney, ddukNum, xStockNum, basicStockNum, stockSellNum, cantDelete}) => {
  // 상태 변수 초기값 설정


  const coinImgArr = [codeEatImg, codingWaffleImg, codepotatoImg, outRunImg, slowCampusImg];
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [showDelistAlert, setShowDelistAlert] = useState(false);

  const [showRisingAlert, setShowRisingAlert] = useState(false);
  
  const companies = ['코드EAT', '코딩와플', '코드포테이토', '아웃프런', '슬로우캠퍼스'];
  
  const companyColorArr = ['a64eff', 'e15014', '392d9e', '54bb74', 'e62148'];


  // 주식 가격 변동 로직 (1초마다 실행)
  useEffect(() => {
    if (coinToStart) {
      const intervalId = setInterval(() => {
        // 랜덤으로 10% 범위 내에서 가격 변동
        setStockPriceArray((prevPriceArray) => {
          const newPriceArray = prevPriceArray.map((price, index) => {
            // 확률로 떡상 또는 떡락할지 결정
            const isRising = Math.random() <= 0.01 * ddukNum[0]; // 1%의 확률로 떡상 + 추가 떡상 계수를 곱한다.
            const isFalling = Math.random() <= 0.01 * ddukNum[1]; // 1%의 확률로 떡락
  
            let change = 0;
            if (isRising) {
              // 떡상 시 30% 상승
              change = Math.round(price * 0.3);              
            } else if (isFalling) {
              // 떡락 시 30% 하락
              change = -Math.round(price * 0.3);
            } else {
              // 일반적인 가격 변동 (10% 범위 내에서)
              const minChange = -Math.round(price * basicStockNum[index]);
              const maxChange = Math.round(price * basicStockNum[index] * xStockNum[index]);
              // 맥스체인지를 1.2배 하는 것. 배열의 계수를 곱해주면 된다.
              change = Math.floor(Math.random() * (maxChange - minChange + 1) + minChange);
            }
  
            const newPrice = price + change;
            if (newPrice <= initialPriceArray[index] * 0.1) {
              setShowDelistAlert(true); // 상장폐지 알림 표시
              if(!cantDelete){
                setHadCoin((prev) => {
                  const newHadCoin = [...prev];
                  newHadCoin[index] = 0;
                  return newHadCoin
                });
              }
              console.log(`${companies[index]} 코인이 상장폐지되었습니다.`);
              setTimeout(() => {
                setShowDelistAlert(false); // 일정 시간 후 알림 닫기
              }, 5000);
              return initialPriceArray[index];
            }
            return newPrice;
          });
          return newPriceArray;
        });

        // 상장폐지 구문을 모달로 띄워서 표시하도록 한다. 그리고 모달창이 자동으로 사라지도록 한다.


  
        // 색상 변경
        setColorArray((prevColorArray) => {
          const newColorArray = prevColorArray.map((color, index) => {
            const newColor = initialPriceArray[index] > stockPriceArray[index] ? 'blue' : 'red';
            return newColor;
          });
          return newColorArray;
        });
      }, 2000);
  
      // 컴포넌트가 unmount 될 때 interval 정리
      return () => clearInterval(intervalId);
    }
  }, [coinToStart, stockPriceArray, initialPriceArray, setStockPriceArray, setColorArray]);
  








  // ESC키를 누르면 이전으로 돌아가게 하는 로직
  const handleEscPress = (event) => {
    if (coinToStart && event.key === 'Escape') {
      setShowConfirmation(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscPress);
    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [coinToStart]);

  // ESC키를 누르면 컨펌 요소를 보여주는 로직

  const handleConfirmYes = () => {
    setShowConfirmation(false);
    setCoinToStart(false);
  };

  const handleConfirmNo = () => {
    setShowConfirmation(false);
  };






  return (
  <>

  <div className='coinpage__total__container'>
  

      <div className='coinpage__price__container'>
      {stockPriceArray.map((price, index) => (
        <div key={index} className='coinpage__price__one__container'>
          <div style={{ color: colorArray[index], position: 'relative', }} className='coinpage__one__price'>
          <img src={coinImgArr[index]} style={{width: '80px', height: '80px', position:'absolute', top: '80px', left: '65px'  }} alt='coinImg' />
            
          <span style={{color: `#${companyColorArr[index]}` }}>&nbsp;&nbsp;&nbsp;{companies[index]}</span>  

            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가격:&nbsp;&nbsp;&nbsp;    {stockPriceArray[index]}원
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      보유코인 수: {hadCoin[index]}개
            &nbsp;&nbsp;&nbsp; 초기가격: {initialPriceArray[index]}원
          </div>
        </div>
      ))}

    <div className='escape__info__coin'>
      ESC키를 누르면 코인 변동을 중지시킬 수 있습니다.
      <ConfirmationDialog isOpen={showConfirmation} onClose={handleConfirmNo} onConfirm={handleConfirmYes}/>
    </div>

    <div className='cointotal__hadMoney'>
      당신이 보유한 총 코인 평가액은 {(hadCoin[0] * stockPriceArray[0]) + (hadCoin[1] * stockPriceArray[1]) + (hadCoin[2] * stockPriceArray[2]) + (hadCoin[3] * stockPriceArray[3]) + (hadCoin[4] * stockPriceArray[4])}원 입니다.
    </div>
    <div className='cointotal__hadMoney'>
      당신이 보유한 총 소지금은 {hadMoney}원 입니다.
    </div>



      </div>

        <div className='coinbuy__total__container'>
        {stockPriceArray.map((price, index) => (
          <CoinBuy
          price={price}
          company={companies[index]}
          initialPrice={initialPriceArray[index]}
          hadCoin={hadCoin}
          setHadCoin={setHadCoin}
          index={index}
          stockPriceArray={stockPriceArray}
          hadMoney={hadMoney}
          setHadMoney={setHadMoney}
          stockSellNum={stockSellNum}
        />
        ))}
        </div>
          




  

    
  

 
   

   


  </div>
  </>
  );
};

export default CoinPage;


// 여기서 만약 esc키를 누를 경우에 정산을 할 수 있는 페이지로 넘어가게 된다. 정산을 다하게 되면(사용자에게 선택권을 부여), 사용자가 원래의 맵으로 돌아올 수 있게 해야 한다. 경마 또한 마찬가지다. 돌아오는 플로우를 만들어내야 한다.


// 가격이 초기 가격의 10% 이하로 떨어졌을 경우, 상장폐지되고 보유하고 있는 코인을 잃도록 고안한다. 전체 글꼴을 조정한다.














