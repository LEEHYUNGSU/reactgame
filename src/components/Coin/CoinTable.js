function CoinTable({hadCoin, setHadCoin, stockPriceArray, colorArray, coin}){
  return(
    <>
    <h1>코인 가격 변동</h1>
        <p style={{ color: colorArray[0] }}>{coin.coinName} 가격: {stockPriceArray[0]}원
        <br/>
        보유코인 수: {coin.number}개
        </p>
        </>
  );
};

export default CoinTable;