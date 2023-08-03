

function CoinStatus({selectedChar, hadCoin, stockPriceArray}){
  return(
    <div className="inventory__container">
    <div className="inventory__info">
      보유 코인 현황
    </div>
    <div className="inventory__item">
      <div className="had__item__container">
        코드잇 가격 : {stockPriceArray[0]}원, 보유코인 수: {hadCoin[0]}개
        <br/>
        코딩와플 가격 : {stockPriceArray[1]}원, 보유코인 수: {hadCoin[1]}개
        <br/>
        코드포테이토 가격 : {stockPriceArray[2]}원, 보유코인 수: {hadCoin[2]}개
        <br/>
        아웃프런 가격 : {stockPriceArray[3]}원, 보유코인 수: {hadCoin[3]}개
        <br/>
        슬로우캠퍼스 가격 : {stockPriceArray[4]}원, 보유코인 수: {hadCoin[4]}개
        <br/>
      </div>
    </div>
  </div>
  )
}

export default CoinStatus;


