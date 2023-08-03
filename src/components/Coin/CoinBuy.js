import React, { useState } from 'react';

const CoinBuy = ({ company, initialPrice, hadCoin, setHadCoin, index, stockPriceArray, hadMoney, setHadMoney, price, stockSellNum }) => {
  const [Amount, setAmount] = useState('');

  const handleBuyInputChange = (event) => {
    setAmount(event.target.value);
  };

  const handleBuyCoin = () => {
    if (Amount !== '' && Number(Amount) > 0 && hadMoney > (stockPriceArray[index] * Number(Amount))) {
      setHadCoin((prev) => {
        const newHadCoin = [...prev];
        newHadCoin[index] += Number(Amount);
        return newHadCoin;
      })
      setHadMoney((prev) => prev - (stockPriceArray[index] * Number(Amount)));
      setAmount('');
    }else {
      alert('소지금을 초과합니다');
    }
  };

  const handleSellCoin = () => {
    if(Amount !== '' && Number(Amount) > 0 && hadCoin[index] >= Amount){
      setHadCoin((prev) => {
        const newHadCoin = [...prev];
        newHadCoin[index] -= Number(Amount);
        return newHadCoin;
      });
      setHadMoney((prev) => prev + (stockPriceArray[index] * Number(Amount) * stockSellNum));
      setAmount('');
    }else {
      alert('보유 코인 갯수를 초과하거나 입력되어 있지 않습니다');
    }
  }

 

  return (
    <div className='coinbuy__container'>
      <div className='coinbuy__company'>{company} 구매</div>
      <div className='coinbuy__total__price'>보유 코인 평가총액: {hadCoin[index] * stockPriceArray[index] }</div>
      <div className='coinbuy__input'>
      <input
        type="number"
        value={Amount}
        onChange={handleBuyInputChange}
        placeholder="수량 입력"
        className='coinbuy__input__input'
        
      />
      </div>
      
      <div className='coinbuy__button'>
      <button onClick={handleBuyCoin} className='coinbuy__button1'>구매</button>
      <button onClick={handleSellCoin} className='coinbuy__button2'>판매</button>
      </div>
      
    </div>
  );
};

export default CoinBuy;
