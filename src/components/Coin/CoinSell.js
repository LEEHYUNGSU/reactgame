import React, { useState } from 'react';

const CoinSell = ({ company, handleSell, hadCoin, setHadCoin }) => {
  const [sellAmount, setSellAmount] = useState('');

  const handleSellInputChange = (event) => {
    setSellAmount(event.target.value);
  };

  const handleSellCoin = () => {
    if (sellAmount !== '' && Number(sellAmount) > 0) {
      handleSell(company, Number(sellAmount));
      setSellAmount('');
    }
  };

  return (
    <div>
      <h3>{company} 판매</h3>
      <input
        type="number"
        value={sellAmount}
        onChange={handleSellInputChange}
        placeholder="판매할 수량 입력"
      />
      <button onClick={handleSellCoin}>판매</button>
    </div>
  );
};

export default CoinSell;
