import { useEffect, useState } from "react";
import LeftStatItem from "./LeftStatItem";
import RightChar from "./RightChar";
import Inventory from "./Inventory";
import CoinStatus from "./CoinStatus";

function Status({setStatusPage, hadMoney, selectedChar, hadCoin, stockPriceArray, ableMove, setAbleMove, statusPage}){
  const [leftSelected, setLeftSelected] = useState(false);
  const [rightSelected, setRightSelected] = useState(false);
  const [invenOpen, setInvenOpen] = useState(false);
  const [coinStatusOpen, setCoinStatusOpen] = useState(false);

  const EscapeBtn = (event) => {
    if (event.key === 'Escape') {
      // 인벤토리가 열려있을 때
      if (invenOpen) {
        setInvenOpen(false);
      }
      else if(coinStatusOpen){
        setCoinStatusOpen(false);
      }
      // 오른쪽 선택이 활성화되어 있을 때 (인벤토리는 닫혀있는 상태)
      else if (rightSelected !== false) {
        setRightSelected(false);
      }
      // 왼쪽 선택이 활성화되어 있을 때 (인벤토리와 오른쪽 선택은 닫혀있는 상태)
      else if (leftSelected !== false) {
        setLeftSelected(false);
      }
      // 모든 선택이 비활성화되어 있을 때 (인벤토리와 왼쪽, 오른쪽 선택은 닫혀있는 상태)
      else {
        setStatusPage(false);
        setAbleMove(true);
      }
    }
  };

  useEffect(() => {
    setAbleMove(false);
  }, []);

  
  useEffect(() => {
    document.addEventListener('keydown', EscapeBtn);
    return () => {
      document.removeEventListener('keydown', EscapeBtn);
    };
  }, [invenOpen, leftSelected, rightSelected, coinStatusOpen]);

  const EnterBtn = (event) => {
    if(event.key === 'Enter' && !leftSelected){
      setLeftSelected(0);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', EnterBtn);
    return() => {
      document.removeEventListener('keydown', EnterBtn);
    }
  });

  const UpDownBtn = (event) => {
    if(event.key === 'ArrowDown' && leftSelected !== false && statusPage){
      setLeftSelected((prev) => (prev + 1) % 4);
    }else if(event.key === 'ArrowUp' && leftSelected !== false && statusPage){
      setLeftSelected((prev) => (prev === 0) ? 3 : prev - 1)
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', UpDownBtn);
    return() => {
      document.removeEventListener('keydown', UpDownBtn);
    }
  });

  const RightEnter = (event) => {
    if(event.key === 'Enter' && leftSelected !==false){
      setRightSelected(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', RightEnter);
    return() => {
      document.removeEventListener('keydown', RightEnter);
    }
  });

  const RightInvenEnter = (event) => {
    if(event.key === 'Enter' && leftSelected === 0 && rightSelected && statusPage){
      setInvenOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', RightInvenEnter);
    return() => {
      document.removeEventListener('keydown', RightInvenEnter);
    }
  }, );

  const RightCoinEnter = (event) => {
    if(event.key === 'Enter' && rightSelected && leftSelected === 1 && statusPage){
      setCoinStatusOpen(true);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', RightCoinEnter);
    return() => {
      document.removeEventListener('keydown', RightCoinEnter);
    }
  }, );



  const StatusItem = [
    {
      id: 0,
      item: '특수능력'
    },{
      id: 1,
      item: '보유코인',
    },{
      id: 2,
      item: '로드하기',
    },{
      id: 3,
      item: '게임종료',
    }
  ];


  return(
    <>
    
    <div className='total__container'>

    {invenOpen ? <Inventory setInvenOpen={setInvenOpen} invenOpen={invenOpen} selectedChar={selectedChar} /> : null }

    {coinStatusOpen ? <CoinStatus selectedChar={selectedChar} stockPriceArray={stockPriceArray} hadCoin={hadCoin} /> : null}
    <div className='status__container' style={{display: invenOpen || coinStatusOpen ? 'none' : 'flex'}} >
      <div className='left__status__container'>
        <div className='left__status__top'>
          {StatusItem.map((item) => (
            <LeftStatItem item={item.item} id={item.id} leftSelected={leftSelected} key={item.id} />
          ))}
        </div>
        <div className='left__status__box'>

        </div>
        <div className='left__status__bottom'>
          소지금
          <br/>
          <br/>
           {hadMoney}원
        </div>
      </div>
      
      <div className='right__status__container'>
        <RightChar rightSelected={rightSelected} selectedChar={selectedChar} />
      </div>
      </div>
    </div>
    </>
  )
};

export default Status;